import React from 'react'
import './styles/filters.css'

export default function Filters() {
  return (
    <div className='filters'>
      <div className='filter-type'>
        <div className='heading'>Related Category</div>
        <div className='filter-list'>
          <div className='list-item'>Paracetamol Tablets</div>
          <div className='list-item'>Paracetamol Syrup</div>
          <div className='list-item'>Paracetamol Powder</div>
          <div className='list-item active'>Aceclofenac</div>
          <div className='list-item'>
            Megaladrate Simethicone Oral Suspension
          </div>
          <div className='list-item'>Mefanamic Paracetamol syrup</div>
        </div>
      </div>
      <div className='filter-type'>
        <div className='heading'>Related Brands</div>
        <div className='filter-list'>
          <div className='list-item'>Cipmol Paracetamol</div>
          <div className='list-item'>Pandal Paracetamol Tablets</div>
          <div className='list-item'>Combiflam</div>
          <div className='list-item'>Crocin Paracetamol Tablets</div>
          <div className='list-item'>Sumo Tablets</div>
        </div>
      </div>
      <div className='filter-type'>
        <div className='heading'>Business Type</div>
        <div className='filter-list'>
          <div className='list-item'>Wholesaler</div>
          <div className='list-item'>Manufacturer</div>
          <div className='list-item'>Retailer</div>
          <div className='list-item'>Exporter</div>
        </div>
      </div>
      <div className='filter-type'>
        <div className='heading'>Strength</div>
        <div className='filter-list'>
          <div className='list-item active'>500 mg</div>
          <div className='list-item'>650 mg</div>
        </div>
      </div>
      <div className='filter-type'>
        <div className='heading'>Manufacturer</div>
        <div className='filter-list'>
          <div className='list-item'>Intas Pharmaceutical Ltd</div>
          <div className='list-item'>Alkem Laboratories Ltd</div>
        </div>
      </div>
      <div className='filter-type'>
        <div className='heading'>Prescription/Non-prescription</div>
        <div className='filter-list'>
          <div className='list-item'>Intas Pharmaceutical Ltd</div>
          <div className='list-item'>Alkem Laboratories Ltd</div>
        </div>
      </div>
    </div>
  )
}
