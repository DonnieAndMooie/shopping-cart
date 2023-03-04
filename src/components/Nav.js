import React from 'react'
import { Link } from "react-router-dom"
import logo from "../images/logo.png"

export default function Nav() {
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
      </div>

    </div>
  )
}
