import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Menu = () => {
  return (
    <ul className="topbar__menu">
      <li>
        <Link to="/users">
        Usuarios
        </Link>
      </li>
      <li>
        <Link to="/products">Mercancia</Link>
      </li>
      <li>
        <Link to="/quotations">Cotizaciones</Link>
      </li>
    </ul>
  )
}

export default Menu
