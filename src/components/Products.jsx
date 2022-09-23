import React from 'react'
import { data } from '../Data'
import { FaTelegramPlane } from 'react-icons/fa'
import './styles/products.css'

export default function Products() {
  return (
    <div className='products'>
      {data.map((product) => {
        return (
          <div className='single-product' key={product.id}>
            <div className='top'>
              <div className='image-container'>
                <img src={product.image} alt='' />
              </div>
              <h3 className='product-name'>{product.name}</h3>
              <p className='price'>
                Rs {product.price} /{' '}
                <span className='type'>{product.type}</span>
              </p>
              <p className='manufacturer-name'>
                <strong>{product.manufacturer}</strong>
              </p>
              <p className='location'>{product.location}</p>
            </div>

            <div className='contact-btn'>
              <FaTelegramPlane />
              <p>Contact Supplier</p>
            </div>
            <div className='bot-design'></div>
          </div>
        )
      })}
    </div>
  )
}
