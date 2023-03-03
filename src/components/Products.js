import React from 'react'
import Nav from './Nav'
import ProductSidebar from './ProductSidebar'
import Shirts from './Shirts'
import Balls from './Balls'
import Boots from './Boots'
import Other from './Other'

export default function Products({type}) {
    let selectedElement
    if (type === "shirts"){
        selectedElement = <Shirts></Shirts>
    }
    else if (type === "boots"){
        selectedElement = <Boots></Boots>
    }
    else if (type === "balls"){
        selectedElement = <Balls></Balls>
    }
    else if (type === "other"){
        selectedElement = <Other></Other>
    }
  return (
    <div>
        <Nav></Nav>
        <div className="page-content">
            <ProductSidebar></ProductSidebar>
            {selectedElement}
        </div> 
    </div>
  )
}
