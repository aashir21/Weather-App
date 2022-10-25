import React from 'react'
import { Link } from 'react-router-dom'
import '../dist/css/navbar.css'
import SearchForm from './SearchForm'

function NavBar() {
  return (
    <nav className='navbar'>
        <ul className='nav-content'>
            <Link to='/' className='label'><h3>raincheck</h3></Link>
            <SearchForm></SearchForm>
        </ul>
    </nav>
  )
}

export default NavBar