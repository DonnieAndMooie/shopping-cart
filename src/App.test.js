import { getByTestId, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Children } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import Contact from './components/Contact';
import Home from './components/Home'
import Nav from './components/Nav';
import RouteSwitch from './RouteSwitch'
import Products from './components/Products'


describe("Test Homepage", () => {
    it("contains nav", () => {
        render(<RouteSwitch/>)
        const nav = screen.getAllByText("FakeFootballStore")
        expect(nav[0]).toBeInTheDocument()
    })
    it("contains 8 images", () => {
        render(<RouteSwitch />)
        const images = screen.getAllByRole("img")
        expect(images).toHaveLength(8)
    }) 
})

describe("Test Nav", () => {
    it ("contains 2 icons", () => {
        render(<BrowserRouter><Nav total={0} numItems={0}/></BrowserRouter>)
        const images = screen.getAllByRole("img")
        expect(images).toHaveLength(2)
    })
    it ("contains 4 links", () => {
        render(<BrowserRouter><Nav total={0} numItems={0}/></BrowserRouter>)
        const links = screen.getAllByRole("link")
        expect(links).toHaveLength(4)
    })
    it ("has empty basket", () => {
        render(<BrowserRouter><Nav total={0} numItems={0}/></BrowserRouter>)
        const numItems = screen.getByTestId("num-items")
        const total = screen.getByTestId("total")
        expect(numItems).toHaveTextContent("Number of Items: 0")
        expect(total).toHaveTextContent("Total: £0.00")
    })
    it ("switches pages", async () => {
        render(<RouteSwitch />)
        const homeText = screen.getByText("Welcome to FakeFootballStore!")
        expect(homeText).toBeInTheDocument()
        const productsLink = screen.getByText("Products")
        await userEvent.click(productsLink)
        const productsText = screen.getByText("England Shirt")
        expect(productsText).toBeInTheDocument()
        const contactLink = screen.getByText("Contact")
        await userEvent.click(contactLink)
        const contactText = screen.getByText("Contact Us")
        expect(contactText).toBeInTheDocument()
        const basketLink = screen.getByAltText("Shopping Basket")
        await userEvent.click(basketLink)
        const basketText = screen.getByText("Your Basket")
        expect(basketText).toBeInTheDocument()

    })
})

describe ("Test Contact Page", () => {
    it ("has 6 images", () => {
        render(<BrowserRouter><Contact/></BrowserRouter>)
        const images = screen.getAllByRole("img")
        expect(images).toHaveLength(6)
    })
    it ("cotaiins an address", () => {
        render(<BrowserRouter><Contact/></BrowserRouter>)
        const text = screen.getByText("Find us at:")
        expect(text).toBeInTheDocument()
    })
})

describe("Test Products Page", () => {
    render(<BrowserRouter><Products numItems={0} total={0} type="shirts"/></BrowserRouter>)
    it("contains 12 images", async () => {
        render(<RouteSwitch/>)
        const ProductsLink = screen.getByText("Products")
        await userEvent.click(ProductsLink)
        const images = screen.getAllByRole("img")
        expect(images).toHaveLength(12)
    })
    it ("switches tabs correctly", async () => {
        render(<RouteSwitch/>)
        const ProductsLink = screen.getByText("Products")
        await userEvent.click(ProductsLink)
        const shirt = screen.getByText("England Shirt")
        expect(shirt).toBeInTheDocument()
        const bootsLink = screen.getByText("Boots")
        await userEvent.click(bootsLink)
        const boots = screen.getByText("Adidas Predators")
        expect(boots).toBeInTheDocument()
        const ballsLink = screen.getByText("Balls")
        await userEvent.click(ballsLink)
        const ball = screen.getByText("La Liga")
        expect(ball).toBeInTheDocument()
        const otherLink = screen.getByText("Other")
        await userEvent.click(otherLink)
        const other = screen.getByText("Goal")
        expect(other).toBeInTheDocument()
    })
    it ("adds to basket correctly", async () => {
        render(<RouteSwitch/>)
        const ProductsLink = screen.getByText("Products")
        await userEvent.click(ProductsLink)
        const viewBtns = screen.getAllByText("View")
        await userEvent.click(viewBtns[0])
        const incrementBtn = screen.getByText("+")
        expect(incrementBtn).toBeInTheDocument()
        const addBtn = screen.getByText("Add to Basket")
        await userEvent.click(addBtn)
        const numItems = screen.getByTestId("num-items")
        const total = screen.getByTestId("total")
        expect(numItems).toHaveTextContent("Number of Items: 1")
        expect(total).toHaveTextContent("Total: £60.00") 

    })
    it ("works with quantity", async () => {
        render(<RouteSwitch/>)
        const ProductsLink = screen.getByText("Products")
        await userEvent.click(ProductsLink)
        const viewBtns = screen.getAllByText("View")
        await userEvent.click(viewBtns[0])
        const incrementBtn = screen.getByText("+")
        await userEvent.click(incrementBtn)
        await userEvent.click(incrementBtn)
        const addBtn = screen.getByText("Add to Basket")
        await userEvent.click(addBtn)
        const numItems = screen.getByTestId("num-items")
        const total = screen.getByTestId("total")
        expect(numItems).toHaveTextContent("Number of Items: 3")
        expect(total).toHaveTextContent("Total: £180.00") 
    })

    it ("back button works on product page", async () => {
        render(<RouteSwitch/>)
        const ProductsLink = screen.getByText("Products")
        await userEvent.click(ProductsLink)
        const ballsLink = screen.getByText("Balls")
        await userEvent.click(ballsLink)
        const viewBtns = screen.getAllByText("View")
        await userEvent.click(viewBtns[0])
        const backBtn = screen.getByTestId("back-btn")
        await userEvent.click(backBtn)
        const ball = screen.getByText("Euro 2020")
        expect(ball).toBeInTheDocument()
    })
})

describe("Test Basket", () => {
    it ("Works with multiple items", async () => {
        render(<RouteSwitch/>)
        const ProductsLink = screen.getByText("Products")
        await userEvent.click(ProductsLink)
        const viewBtns = screen.getAllByText("View")
        await userEvent.click(viewBtns[0])
        const addBtn = screen.getByText("Add to Basket")
        await userEvent.click(addBtn)
        const ballsLink = screen.getByText("Balls")
        await userEvent.click(ballsLink)
        const ballViewBtns = screen.getAllByText("View")
        await userEvent.click(ballViewBtns[0])
        const ballAddBtn = screen.getByText("Add to Basket")
        await userEvent.click(ballAddBtn)
        const basketLink = screen.getByAltText("Shopping Basket")
        await userEvent.click(basketLink)
        const shirt = screen.getByText("England Shirt")
        expect(shirt).toBeInTheDocument()
        const ball = screen.getByText("Adidas Brazuca")
        expect(ball).toBeInTheDocument()
        const numItems = screen.getByTestId("num-items")
        const total = screen.getByTestId("total")
        expect(numItems).toHaveTextContent("Number of Items: 2")
        expect(total).toHaveTextContent("Total: £78.00") 

    })
    it ("Displays correct values on all pages", async () => {
        render(<RouteSwitch/>)
        const ProductsLink = screen.getByText("Products")
        await userEvent.click(ProductsLink)
        const viewBtns = screen.getAllByText("View")
        await userEvent.click(viewBtns[0])
        const addBtn = screen.getByText("Add to Basket")
        await userEvent.click(addBtn)
        let numItems = screen.getByTestId("num-items")
        let total = screen.getByTestId("total")
        expect(numItems).toHaveTextContent("Number of Items: 1")
        expect(total).toHaveTextContent("Total: £60.00")
        const homeLink = screen.getByText("FakeFootballStore")
        await userEvent.click(homeLink)
        numItems = screen.getByTestId("num-items")
        total = screen.getByTestId("total")
        expect(numItems).toHaveTextContent("Number of Items: 1")
        expect(total).toHaveTextContent("Total: £60.00")
        const contactLink = screen.getByText("Contact")
        await userEvent.click(contactLink)
        numItems = screen.getByTestId("num-items")
        total = screen.getByTestId("total")
        expect(numItems).toHaveTextContent("Number of Items: 1")
        expect(total).toHaveTextContent("Total: £60.00")
    })
})