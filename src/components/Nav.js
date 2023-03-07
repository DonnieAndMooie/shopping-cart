import React from 'react'
import { Link } from "react-router-dom"
import logo from "../images/logo.png"
import basket from "../images/basket.png"

export default function Nav({total, numItems}) {
  const formatter = new Intl.NumberFormat("en-UK", {
    style: "currency",
    currency: "GBP"
  })
  return (
    <div className='nav'>
      <div className="left-links">
      <Link className='link logo-link' to="/">
        <img src={logo} alt="Football Logo" className='logo' />FakeFootballStore
        </Link>
      </div>
      <div className="right-links">
        <Link className='link' to="/products">Products</Link>
        <Link className="link" to="/contact">Contact</Link>
        <div className="basket">
          <Link to={"/basket"} className="basket-link">
          <img src={basket} alt="Shopping Basket" className='basket-icon' />
          </Link>
          
          <div className="basket-text">
            <p className="num-items">Number of Items: {numItems}</p>
            <p className="total">Total: {formatter.format(total)}</p>
          </div>
        </div>
      </div>

    </div>
  )
}
