import React from 'react'
import { Link, json } from 'react-router-dom'
import '../styles/Reservations.css'


function Reservations() {
  return (
    <div className='reservationspage'>
        <h1>Make Reservations</h1>
        <div className='reservationForm'>
            <input type='text' placeholder='First Name' name='name' id='firstName' />
            <input type='text' placeholder='Last Name' name='lastName'/>
            <input type='text' placeholder='Phone Number' name='name' id='phoneNumber'/>
            <input type='email' placeholder='Email' name='name' id='email'/>
            <input type='date' placeholder='Reservation Date' name='name' id='date'/>
            <input type='time' placeholder='Time' name='name'/>
            <select>
                <option value={"Customer did not select"}>---Select Your Table---</option>
                <option value={"Table for 1"}>Table for 1</option>
                <option value={"Table for 2"}>Table for 2</option>
                <option value={"Table for 4"}>Table for 4</option>
                <option value={"Table for 8"}>Table for 8</option>
            </select>
            <input type='submit' placeholder='Name'  className='submit'/>
            <select>
                <option>---Would You Like A Special Performance---</option>
                <option>Violin</option>
                <option>Saxophone</option>
                <option>None</option>
            </select>
        </div>
    </div>
  )
}

export default Reservations
