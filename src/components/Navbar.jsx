import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import './styles/navbar.css'

export default function Navbar() {
  return (
    <nav>
      <div className='left'>
        <div className='logo'></div>
        <h2 className='company-name'>Medical Darpan</h2>
      </div>
      <div className='mid'>
        <div className='option'>Home</div>
        <div className='option'>Products</div>
        <div className='option'>Distributor</div>
        <div className='option'>Manufacturers</div>
        <div className='option'>About Us</div>
        <div className='option'>Blog</div>
      </div>
      <div className='right'>
        <div className='login'>Login</div>
        <div className='user'>
          <FaUserCircle />
        </div>
      </div>
    </nav>
  )
}
