import React from 'react'
import Item from './Item'
import englandShirt from '../images/england-shirt.jpeg'

export default function Shirts() {
  return (
    <div className="products-grid">
      <Item title="England Shirt" imgSrc={englandShirt} price="£60.00"></Item>
      <Item title="England Shirt" imgSrc={englandShirt} price="£60.00"></Item>
      <Item title="England Shirt" imgSrc={englandShirt} price="£60.00"></Item>
      <Item title="England Shirt" imgSrc={englandShirt} price="£60.00"></Item>
      <Item title="England Shirt" imgSrc={englandShirt} price="£60.00"></Item>
      <Item title="England Shirt" imgSrc={englandShirt} price="£60.00"></Item>
      <Item title="England Shirt" imgSrc={englandShirt} price="£60.00"></Item>
      <Item title="England Shirt" imgSrc={englandShirt} price="£60.00"></Item>
    </div>
  )
}
