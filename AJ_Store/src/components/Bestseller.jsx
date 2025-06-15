import React from 'react'
import Productcart from './Productcart'

export default function Bestseller() {
  return (
    <div className="mt-16">
      <p className="text-2xl md:text-3xl font-medium">Best Sellers</p>
      <div>
        <Productcart/>
      </div>
    </div>
  )
}
