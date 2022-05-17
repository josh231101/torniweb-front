import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Menu = () => {
  return (
    <ul className="topbar__menu">
      <li>
        <Link to="/users">
        Users
        </Link>
      </li>
      <li>
        <Link to="/products">Products</Link>
      </li>
      <li>
        <Link to="/products/add">
        Add product
        </Link>
      </li>
      <li>
        <Link to="/quotations">Quotations</Link>
      </li>
    </ul>
  )
}

export default Menu
