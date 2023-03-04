import React from 'react'
import Nav from './Nav'

import stadium from '../images/stadium.avif'
import lotsOfShirts from '../images/lots-of-shirts.jpg'
import shirt from '../images/england-shirt.jpeg'
import boots from '../images/nike-mercurial.jpeg'
import ball from '../images/qatar-ball.jpeg'
import more from '../images/maradona-shirt.jpg'

export default function Home() {
  return (
    <div className='home'>
        <Nav></Nav>
        <h1 className='home-heading'>Welcome to FakeFootballStore!</h1>
        <p className="intro">Are you football mad? If you are,
        FakeFootballStore is perfect for you! We have everything
        from the latest kits (and retro ones of course!) to balls,
        boots and more!</p>
        <img src={stadium} alt="Football Stadium" className='stadium-img' />
        <div className="shirts-img-container">
          <p className='shirts-caption'>Whatever your team, we've got you covered!</p>
          <img src={lotsOfShirts} alt="Lots of different football shirts" className='lots-of-shirts-img' />
        </div>
       
        <div className="homepage-grid">
          <h2 className='homepage-grid-heading'>Shirts</h2>
          <img className='homepage-grid-img' src={shirt} alt="England Shirt" />
          <h3 className='homepage-grid-heading'>Boots</h3>
          <img className='homepage-grid-img' src={boots} alt="Nike Mercurial Football Boots" />
          <h3 className='homepage-grid-heading'>Balls</h3>
          <img className='homepage-grid-img' src={ball} alt="Qatar 2022 World Cup Ball" />
          <h3 className='homepage-grid-heading'>And More!</h3>
          <img className='homepage-grid-img' src={more} alt="Framed and signed Steven Gerrard shirt" />
        </div>
    </div>
  )
}
