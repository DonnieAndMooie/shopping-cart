import React from 'react'
import Item from './Item'
import englandShirt from '../images/shirts/england-shirt.jpeg'
import arsenalShirt from '../images/shirts/arsenal-shirt.jpg'
import brazilShirt from '../images/shirts/brazil-shirt.jpg'
import dortmundShirt from '../images/shirts/dortmund-shirt.jpg'
import liverpoolShirt from '../images/shirts/liverpool-shirt.webp'
import netherlandShirt from '../images/shirts/netherlands-shirt.jpeg'
import spainShirt from '../images/shirts/spain-shirt.jpg'
import spursShirt from '../images/shirts/spurs-shirt.webp'
import milanShirt from '../images/shirts/milan-shirt.jpeg'
import barcelonaShirt from '../images/shirts/barcelona-shirt.jpg'

const shirts = [
  {
    title: "England Shirt",
    imgSrc: englandShirt,
    price: "£60.00"
  },
  {
    title: "Arsenal Shirt",
    imgSrc: arsenalShirt,
    price: "£42.00"
  },
  {
    title: "Brazil Shirt",
    imgSrc: brazilShirt,
    price: "£48.00"
  },
  {
    title: "Dortmund Shirt",
    imgSrc: dortmundShirt,
    price: "£90.00"
  },
  {
    title: "Liverpool Shirt",
    imgSrc: liverpoolShirt,
    price: "£65.00"
  },
  {
    title: "Netherlands Shirt",
    imgSrc: netherlandShirt,
    price: "£90.00"
  },
  {
    title: "Spain Shirt",
    imgSrc: spainShirt,
    price: "£75.50"
  },
  {
    title: "Spurs Shirt",
    imgSrc: spursShirt,
    price: "£35.75"
  },
  {
    title: "AC Milan Shirt",
    imgSrc: milanShirt,
    price: "£90.00"
  },
  {
    title: "Barcelona Shirt",
    imgSrc: barcelonaShirt,
    price: "£72.00"
  },
]

export default function Shirts() {
  return (
    <div className="products-grid">
      {shirts.map(shirt => <Item title={shirt.title} imgSrc={shirt.imgSrc} price={shirt.price}></Item>)}
    </div>
  )
}
