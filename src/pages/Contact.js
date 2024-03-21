import React from 'react'

function Contact() {
  return (
    <div className='reservationspage'>
        <h1>Contact Us</h1>
        <div className='reservationForm'>
            <input type='text' placeholder='First Name' name='name' id='firstName' />
            <input type='text' placeholder='Last Name' name='lastName'/>
            <input type='text' placeholder='Phone Number' name='name' id='phoneNumber'/>
            <input type='email' placeholder='Email' name='name' id='email'/>
            <input type='submit' placeholder='Name'  className='submit'/>
            <input type='text' placeholder='Message' />
        </div>
    </div>
  )
}

export default Contact
