import React from 'react'
import Item from './Item'
import adidasBrazuca from '../images/balls/adidas-brazuca.jpeg'
import adidasJabulani from '../images/balls/adidas-jabulani.jpeg'
import adidasTelstar from '../images/balls/adidas-telstar.jpg'
import euro2012 from '../images/balls/euro-2012-ball.png'
import euro2020 from '../images/balls/euro-2020-ball.png'
import laLiga from '../images/balls/la-liga-ball.jpeg'
import pl0405 from '../images/balls/pl-04-05-yellow.png'
import pl2223 from '../images/balls/pl-2022-23.webp'
import ucl23 from '../images/balls/ucl-2023.jpg'
import ucl18 from '../images/balls/ucl-final-2018.jpeg'

const balls =[{
  title: "Adidas Brazuca",
  imgSrc: adidasBrazuca,
  price: "£18.00",
  type: "balls"
  },
  {
  title: "Adidas Jabulnai",
  imgSrc: adidasJabulani,
  price: "£14.50",
  type: "balls"
  },
  {
    title: "Adidas Telstar",
    imgSrc: adidasTelstar,
    price: "£32.00",
    type: "balls"
  },
  {
    title: "Euro 2012",
    imgSrc: euro2012,
    price: "£12.00",
    type: "balls"
  },
  {
    title: "Euro 2020",
    imgSrc: euro2020,
    price: "£25.75",
    type: "balls"
  },
  {
    title: "La Liga",
    imgSrc: laLiga,
    price: "£36.00",
    type: "balls"
  },
  {
    title: "Premier League 04/05",
    imgSrc: pl0405,
    price: "£23.00",
    type: "balls"
  },
  {
    title: "Premier League 22/23",
    imgSrc: pl2223,
    price: "£40.00",
    type: "balls"
  },
  {
    title: "Champions League 2023",
    imgSrc: ucl23,
    price: "£35.50",
    type: "balls"
  },
  {
    title: "Champions League 2018",
    imgSrc: ucl18,
    price: "£25.00",
    type: "balls"
  },
  

]

export default function Balls() {
  return (
    <div className='products-grid'>
      {balls.map(ball => <Item key={ball.title} title={ball.title} imgSrc={ball.imgSrc} price={ball.price}></Item>)}
    </div>
  )
}

export { balls }