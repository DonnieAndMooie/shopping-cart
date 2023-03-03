import React, { Component } from 'react'
import { Link } from "react-router-dom"

export default class ProductSidebar extends Component {
  render() {
    return (
      <div className='sidebar'>
        <Link to={"/products/shirts"} className="sidebar-link">Shirts</Link>
        <Link to={"/products/boots"} className="sidebar-link">Boots</Link>
        <Link to={"/products/balls"} className="sidebar-link">Balls</Link>
        <Link to={"/products/other"} className="sidebar-link">Other</Link>
      </div>
    )
  }
}
