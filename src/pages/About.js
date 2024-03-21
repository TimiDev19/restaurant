import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/About.css'
import homeBackground from '../assets/homeBackground.avif'

function About() {
  return (
    <div style={{ backgroundImage: `url(${homeBackground})` }} className='aboutpage'>
      <div className='headerContainerAbout'>
        <h1>About Eat.com</h1>
        <p>lorem ipsum dolor sit amet lus treparton dos partidos sinquare des amigos tu negrito il sayung si
        </p>
      </div>
    </div>
  )
}

export default About
