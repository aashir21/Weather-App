import React from 'react'
import { Link } from 'react-router-dom'
import '../dist/css/navbar.css'

function NavBar() {
  return (
    <nav className='navbar'>
        <ul className='nav-content'>
            <img src='https://cdn-icons.flaticon.com/png/128/3222/premium/3222801.png?token=exp=1647166719~hmac=ad843f44ffc01c12e4c94c15ee89c459' alt='nav-logo'></img>
            <Link to='/' className='label'><h3>raincheck</h3></Link>
        </ul>
    </nav>
  )
}

export default NavBar