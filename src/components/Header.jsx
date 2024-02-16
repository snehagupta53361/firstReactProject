import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

import "../styles/header.scss"

const Header = () => {
  return (
    <>
        <nav className='navBar'>
            <h1>SnehaStar</h1>
            <main>
            <HashLink to="/#home">Home</HashLink>

            <HashLink to="/#about">About</HashLink>
            <HashLink to="/#brands">Brands</HashLink>
            <Link to="/Services">Services</Link>
            <Link to="/Contact">Contact</Link>
            </main>
        </nav>
    </>
  )
}

export default Header