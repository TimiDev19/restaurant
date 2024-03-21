import React from 'react'
import '../styles/Home.css'
import {Link} from 'react-router-dom'
import homeBackground from '../assets/homeBackground.avif'
import ad1 from '../assets/advert_1.jpeg'
import ad2 from '../assets/advert_2.jpeg'
import ad3 from '../assets/advert_3.jpeg'
import ad4 from '../assets/advert_3.webp'
import ad5 from '../assets/advert_4.webp'
import ad6 from '../assets/advert_5.jpeg'

function Home() {
  return (
    <>
    <div style={{ backgroundImage: `url(${homeBackground})` }} className='homepage'>
      <div className='headerContainer'>
        <h1>Eat.com</h1>
        <p>FOOD TO FIT ANY TASTE</p>
        <Link to="/reservations">
        <button>Make Reservations</button>
        </Link>
      </div>
    </div>
    <div className='advert-box'>
        <div className='advert-container'>
        <img src={ad1} />
        <img src={ad2} />
        <img src={ad3} />
        <img src={ad4} />
        <img src={ad5} />
        <img src={ad6} />
        </div>
      </div>
    </>
  )
}

export default Home
