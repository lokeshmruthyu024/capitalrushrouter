import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate();
  return (
    <div className='Navbar'>
      <h2>Capital Rush</h2>
      <ul>
        <NavLink to={'/home'}><li>Home</li></NavLink>
        <NavLink to={'/about'}><li>About</li></NavLink>
        <NavLink to={'/blog'}><li>Blog</li></NavLink>
        <NavLink to={'/timeline'}><li>Timeline</li></NavLink>
      </ul>
      <button onClick={() => { navigate('/about') }}>Get Started </button>
      {/* integrating button with navigate */}
    </div>
  )
}

export default Navbar
