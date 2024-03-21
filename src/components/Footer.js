import React from 'react'
import '../styles/Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footerpage'>
        <div className='a'>
            <ul>
                <span><li><Link>Open days</Link></li></span>
                <li>Monday: 10am - 10pm</li>
                <li>Tuesday: 10am - 10pm</li>
                <li>Wednesday: 10am - 10pm</li>
                <li>Thursday: 10am - 10pm</li>
                <li>Friday: 10am - 10pm</li>
                <li>Saturday: 9am - 11pm</li>
                <li>Sunday: CLOSED</li>
            </ul>
        </div>
        <div className='a'>
            <ul>
                <span><li><Link>Social Media</Link></li></span>
                <li><Link>Instagram</Link></li>
                <li><Link>Twitter</Link></li>
                <li><Link>Facebook</Link></li>
            </ul>
        </div>
        <div className='a'>
            <ul>
                <span><li><Link>Links</Link></li></span>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li> <Link to='/menu'>Menu</Link></li>
                <li><Link to='/reservations'>Reservations</Link></li>
                <li><Link to='/contact'>Contact Us</Link></li>
            </ul>
        </div>
        <div className='a-hidden'>
            <ul>
                <span><li><Link>Open days</Link></li></span>
                <li>Monday: 10am - 10pm</li>
                <li>Tuesday: 10am - 10pm</li>
                <li>Wednesday: 10am - 10pm</li>
                <li>Thursday: 10am - 10pm</li>
                <li>Friday: 10am - 10pm</li>
                <li>Saturday: 9am - 11pm</li>
                <li>Sunday: CLOSED</li>
            </ul>
        </div>
        <div className='a-hidden'>
            <ul>
                <span><li><Link>Social Media</Link></li></span>
                <li><Link>Instagram</Link> <Link>Twitter</Link> <Link>Facebook</Link></li>
            </ul>
        </div>
        <div className='a-hidden'>
            <ul>
                <span><li><Link>Links</Link></li></span>
                <li><Link to='/'>Home</Link> <Link to='/about'>About</Link> <Link to='/menu'>Menu</Link> <Link to='/reservations'>Reservations</Link> <Link to='/contact'>Contact Us</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer
