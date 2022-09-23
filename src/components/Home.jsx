import React from 'react'
import Filters from './Filters'
import Products from './Products'
import './styles/home.css'

export default function Home() {
  return (
    <div className='home'>
      <Filters />
      <Products />
    </div>
  )
}
