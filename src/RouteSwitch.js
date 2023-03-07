import React, { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Contact from "./components/Contact"
import Home from "./components/Home"
import Products from "./components/Products"
import { shirts } from "./components/Shirts"
import { boots } from "./components/Boots"
import { balls } from "./components/Balls"
import { other } from "./components/Other"
import Basket from "./components/Basket"
import ProductPage from "./components/ProductPage"

const allItems = [...shirts, ...boots, ...balls, ...other]

export default function RouteSwitch() {
  const [numItems, setNumItems] = useState(0)
  const [total, setTotal] = useState(0)
  const [basket, setBasket] = useState([])
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home numItems={numItems} total={total}/>}></Route>
            <Route path="/products" element={<Products numItems={numItems} total={total} type="shirts"/>}></Route>
            <Route path="/products/shirts" element={<Products numItems={numItems} total={total} type="shirts"/>}></Route>
            <Route path="/products/boots" element={<Products numItems={numItems} total={total} type="boots"/>}></Route>
            <Route path="/products/balls" element={<Products numItems={numItems} total={total} type="balls"/>}></Route>
            <Route path="/products/other" element={<Products numItems={numItems} total={total} type="other"/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            {allItems.map((item, i) => <Route key={i} path={`/products/${item.title}`} element={<ProductPage item={item} total={total} setTotal={setTotal} numItems={numItems} setNumItems={setNumItems} basket={basket} setBasket={setBasket}></ProductPage>}></Route>)}
            <Route path="/basket" element={<Basket basket={basket} setBasket={setBasket} numItems={numItems} total={total} setNumItems={setNumItems} setTotal={setTotal}/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}
