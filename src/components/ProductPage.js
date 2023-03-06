import React, { useState } from 'react'
import Nav from './Nav'
import ProductSidebar from './ProductSidebar'
import { Link } from 'react-router-dom'

export default function ProductPage({item}) {
  const [quantity, setQuantity] = useState(1)
  if (quantity < 0){
    setQuantity(0)
  }
  return (
    <div>
    <Nav></Nav>
    <div className="page-content">
      <ProductSidebar></ProductSidebar> 
      <div className="product-container">
      <div className="product-page">
        <Link className='back-button' to={`/products/${item.type}`}>
          <button className="back-button">⬅</button>
        </Link>
        <h1>{item.title}</h1>
        <img src={item.imgSrc} alt={item.title} />
        <p className="price">{item.price}</p>
        <div className="quantity">
          <button onClick={() => setQuantity(quantity - 1)} className="decrement">-</button>
          <input type="number" value={quantity} onChange={(e) => setQuantity((Number(e.target.value)))}/>
          <button onClick={() => setQuantity(quantity + 1)} className="increment">+</button>
        </div>
        <button className="add-item">Add to Basket</button>
      </div>
      </div>
    </div>
    </div>
  )
}
