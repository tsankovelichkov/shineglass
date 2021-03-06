import React from 'react'
import ProductListCard from '../../Cards/ProductListCard'
import { useEffect, useState } from "react";



const BestsellersBlockContent = () => {
  const [bestsellerProducts, setBestsellerProducts] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/bestsellerproducts')
      .then(res => res.json())
      .then(res => setBestsellerProducts(res))
  }, [])

  return (
    <section>

      <h4 className="text-center mt-4 mb-5"><strong>Bestsellers</strong></h4>
      <div className="row">
        {bestsellerProducts.map(x => <ProductListCard key={x._id} data={x} />)}
      </div>
    </section>
  )
}

export default BestsellersBlockContent
