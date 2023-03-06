import React from 'react'
import { Link } from "react-router-dom"

export default function Item({title, imgSrc, price}) {
  return (
    <div className='item'>
        <h3 className='item-heading'>{title}</h3>
        <img className='item-img' src={imgSrc} alt={title} />
        <p className='item-price'>{price}</p>
        <Link className="item-link" to={`/products/${title}`}>View</Link>
    </div>
  )
}
