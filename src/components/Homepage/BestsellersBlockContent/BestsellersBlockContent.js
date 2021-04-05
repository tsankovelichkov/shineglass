import React from 'react'
import BestsellersBlockContentCard from './BestsellerBlockContentCard/BestsellersBlockContentCard'
import { useEffect, useState } from "react";



const BestsellersBlockContent = () => {
    const [bestsellerProducts,setBestsellerProducts] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/bestsellerproducts')
      .then(res => res.json())
      .then(res => setBestsellerProducts(res))
  }, [])
  console.log(bestsellerProducts)
    return (
        <section>

            <h4 class="text-center mt-4 mb-5"><strong>Bestsellers</strong></h4>
            <div class="row">
            {bestsellerProducts.map(x=><BestsellersBlockContentCard data={x}/>)}
            </div>
        </section>
    )
}

export default BestsellersBlockContent
