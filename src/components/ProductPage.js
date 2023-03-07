import React, { useState } from 'react'
import Nav from './Nav'
import ProductSidebar from './ProductSidebar'
import { Link } from 'react-router-dom'

export default function ProductPage({item, total, setTotal, numItems, setNumItems, basket, setBasket}) {
  const [quantity, setQuantity] = useState(1)

  if (quantity < 0){
    setQuantity(0)
  }
  return (
    <div>
    <Nav total={total} numItems={numItems}></Nav>
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
        <Link to={"./.."}>
          <button className="add-item" onClick={() => {
            setTotal(total + (item.price.substring(1) * quantity))
            setNumItems(numItems + quantity)
            setQuantity(1)
            setBasket([...basket, {item, quantity}])
          }}>Add to Basket</button>
        </Link>
        
      </div>
      </div>
    </div>
    </div>
  )
}
