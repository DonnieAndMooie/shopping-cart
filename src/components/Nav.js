import React from 'react'
import { Link } from "react-router-dom"
import logo from "../images/logo.png"

export default function Nav() {
  return (
    <div className='nav'>
      <div className="left-links">
      <img src={logo} alt="Football Logo" className='logo' />
      <Link className='link' to="/">Home</Link>
      </div>
      <div className="right-links">
        <Link className='link' to="/products">Products</Link>
        <Link className="link" to="/contact">Contact</Link>
      </div>

    </div>
  )
}
