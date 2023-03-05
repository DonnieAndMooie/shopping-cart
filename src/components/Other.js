import React from 'react'
import GoalsDVD from '../images/other/500-pl-goals-dvd.jpg'
import cornerFlag from '../images/other/corner-flag.png'
import englandScarf from '../images/other/england-scarf.jpeg'
import gloves from '../images/other/gloves.avif'
import goal from '../images/other/goal.jpeg'
import messiCutout from '../images/other/messi-cardboard-cutout.jpg'
import faCup from '../images/other/replica-fa-cup.webp'
import shinpads from '../images/other/shinpads.jpeg'
import socks from '../images/other/socks.jpeg'
import wembley from '../images/other/wembley-model.jpg'
import Item from './Item'

const other = [
  {
    title: "500 PL Goals DVD",
    imgSrc: GoalsDVD,
    price: "£5.20"
  },
  {
    title: "Corner Flag",
    imgSrc: cornerFlag,
    price: "£12.75"
  },
  {
    title: "England Scarf",
    imgSrc: englandScarf,
    price: "£7.40"
  },
  {
    title: "Goalkeeper Gloves",
    imgSrc: gloves,
    price: "£4.20"
  },
  {
    title: "Goal",
    imgSrc: goal,
    price: "£23.00"
  },
  {
    title: "Messi Cardboard Cutout",
    imgSrc: messiCutout,
    price: "£12.00"
  },
  {
    title: "Replica FA Cup",
    imgSrc: faCup,
    price: "£18.50"
  },
  {
    title: "Shinpads",
    imgSrc: shinpads,
    price: "£3.50"
  },
  {
    title: "Socks",
    imgSrc: socks,
    price: "£1.80"
  },
  {
    title: "Wembley Stadium Model",
    imgSrc: wembley,
    price: "£23.00"
  },
]

export default function Other() {
  return (
    <div className='products-grid'>
      {other.map(obj => <Item key={obj.title} title={obj.title} imgSrc={obj.imgSrc} price={obj.price}></Item>)}
    </div>    
  )
}

export { other }