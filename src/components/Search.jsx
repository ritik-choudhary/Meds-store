import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import './styles/search.css'

export default function Search() {
  return (
    <div className='search-area'>
      <div className='location'>
        <p>Medical Darpan</p>
        <p>{`>`}</p>
        <p>Search</p>
        <p>{`>`}</p>
        <p className='tab-name'>Fabiflu Tablet</p>
      </div>
      <div className='search-panel'>
        <input
          type='text'
          name='med-name'
          id='med-name'
          placeholder='Paracetamol'
        />
        <button>Search</button>
      </div>
      <div className='search-results'>
        <h3>Paracetamol</h3>
        <p>(128 Products)</p>
        <div className='tags'>
          <div className='tag'>
            <p>Aceclofenac</p>
            <AiOutlineClose className='delete' />
          </div>
          <div className='tag'>
            <p>500 mg</p>
            <AiOutlineClose className='delete' />
          </div>
        </div>
        <div className='remove-all-btn'>
          <p>Remove all</p>
        </div>
      </div>
    </div>
  )
}
