import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Contact from "./components/Contact"
import Home from "./components/Home"
import Products from "./components/Products"

export default function RouteSwitch() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/products" element={<Products type="shirts"/>}></Route>
            <Route path="/products/shirts" element={<Products type="shirts"/>}></Route>
            <Route path="/products/boots" element={<Products type="boots"/>}></Route>
            <Route path="/products/balls" element={<Products type="balls"/>}></Route>
            <Route path="/products/other" element={<Products type="other"/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}
