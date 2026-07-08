import React from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css'
const Navbar = () => {
  return (
    <>
    <nav className='Navbar'>
      <div className='logo'>
        Portfolio
      </div>
      <div className='navlinks'>
      <NavLink 
      to = '/'
      className={({isActive}) => (isActive ? 'active' : '')}>
         Home </NavLink>
      <NavLink
       to = '/about'
       className={({isActive}) => (isActive ? 'active' : '')}>
         About </NavLink>
      <NavLink
       to = '/skills'
       className={({isActive}) => (isActive ? 'active' : '')}>
         Skills </NavLink>
      <NavLink 
      to = '/projects'
      className={({isActive}) => (isActive ? 'active' : '')}>
        Project </NavLink>
      <NavLink
       to = '/contact'
       className={({isActive}) => (isActive ? 'active' : '')}>
         Contact </NavLink>
      </div>
    </nav>
    </>
  )
}

export default Navbar
