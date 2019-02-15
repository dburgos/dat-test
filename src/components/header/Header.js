import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><NavLink to={`${process.env.PUBLIC_URL}/`}>Home</NavLink></li>
        <li><NavLink to={`${process.env.PUBLIC_URL}/list`}>List</NavLink></li>
        <li><NavLink to={`${process.env.PUBLIC_URL}/contact`}>Contact</NavLink></li>
      </ul>
    </nav>
  </header>
)

export default Header
