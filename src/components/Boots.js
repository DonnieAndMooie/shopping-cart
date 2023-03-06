import React from 'react'
import Item from './Item'
import nikeMercurials from '../images/boots/nike-mercurial.jpeg'
import adidasCopaMundials from '../images/boots/adidas-copa-mundial.webp'
import adidasPink from '../images/boots/adidas-pink.webp'
import adidasPredators from '../images/boots/adidas-predator.png'
import adidasSpeedPortal from '../images/boots/adidas-speed-portal.jpg'
import mercurialVaporPink from '../images/boots/mercurial-vapor-pink.jpg'
import nikeMercurialBlack from '../images/boots/nike-mercurial-black.avif'
import nikeSuperfly from '../images/boots/nike-superfly.jpeg'
import umbroBlack from '../images/boots/umbro-black.jpeg'
import underArmourWhite from '../images/boots/under-armour-white.avif'

const boots = [
  {
    title: "Nike Mercurials",
    imgSrc: nikeMercurials,
    price: "£48.00",
    type: "boots"
  },
  {
    title: "Adidas Copa Mundials",
    imgSrc: adidasCopaMundials,
    price: "£56.00",
    type: "boots"
  },
  {
    title: "Adidas Pink",
    imgSrc: adidasPink,
    price: "£32.00",
    type: "boots"
  },
  {
    title: "Adidas Predators",
    imgSrc: adidasPredators,
    price: "£62.00",
    type: "boots"
  },
  {
    title: "Adidas Speed-Portal",
    imgSrc: adidasSpeedPortal,
    price: "£40.50",
    type: "boots"
  },
  {
    title: "Mercurial Vapor Pink",
    imgSrc: mercurialVaporPink,
    price: "£92.00",
    type: "boots"
  },
  {
    title: "Nike Mercurial Black",
    imgSrc: nikeMercurialBlack,
    price: "£75.50",
    type: "boots"
  },
  {
    title: "Nike Superfly",
    imgSrc: nikeSuperfly,
    price: "£44.00",
    type: "boots"
  },
  {
    title: "Umbro Black",
    imgSrc: umbroBlack,
    price: "£20.25",
    type: "boots"
  },
  {
    title: "Under Armour White",
    imgSrc: underArmourWhite,
    price: "£35.00",
    type: "boots"
  },
]

export default function Boots() {
  return (
    <div className='products-grid'>
      {boots.map(boot => <Item key={boot.title} title={boot.title} imgSrc={boot.imgSrc} price={boot.price}></Item>)}
    </div>
    
  )
}

export { boots }
