import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import '../styles/Navbar.css'
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
}

const [openLinks, setOpenLinks] = useState(false);


  return (
    <div className='navbar'>
        <div className='leftSide' id={openLinks  ? "open" : "close"}>
            <h1>Eat.com</h1>
            <div className='hiddenLinks'>
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        </div>
        </div>
        <div className='rightSide'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/menu'>Menu</Link>
            <Link to='/reservations'>Reservations</Link>
            <Link to='/contact'>Contact Us</Link>
            <button onClick={toggleNavbar}>
            <ReorderIcon/>
            </button>
        </div>
      
    </div>
  )
}

export default Navbar
