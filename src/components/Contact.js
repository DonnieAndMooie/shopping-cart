import React from 'react'
import Nav from './Nav'
import map from '../images/map.avif'
import twitter from '../images/icons8-twitter.svg'
import facebook from '../images/facebook.svg'
import instagram from '../images/instagram.svg'

export default function Contact({numItems, total}) {
  return (
    <div className='contact'>
        <Nav total={total} numItems={numItems}></Nav>
        <h1 className='contact-heading'>Contact Us</h1>
        <img className='map' src={map} alt="Map" />
        <p className='address'>Find us at:</p>
        <p className='address'>18 Imaginary Road</p>
        <p className='address'>Imaginary Town</p>
        <p className='address'>Imaginary Country</p>
        <p className='address'>MK23 DEI</p>
        <div className="social-media">
          <img className='social-media-icon' src={twitter} alt="Twitter" />
          <h3 className='social-media-heading'>@FakeFootballStore</h3>
          <img className='social-media-icon' src={facebook} alt="Facebook" />
          <h3 className='social-media-heading'>FakeFootballOfficial</h3>
          <img className='social-media-icon' src={instagram} alt="Instagram" />
          <h3 className='social-media-heading'>@FakeFootballStoreOfficial</h3>
        </div>
    </div>
  )
}
