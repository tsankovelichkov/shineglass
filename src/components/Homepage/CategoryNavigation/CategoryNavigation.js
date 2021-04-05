import React from 'react'
import './categoryNavigation.css';
import { useEffect, useState } from "react";
import CategoryNavElement from './CategoryNavElement/CategoryNavElement'

const CategoryNavigation = () => {
  const [categoryNavElements, setCategoryNavElements] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/categorybrands')
      .then(res => res.json())
      .then(res => setCategoryNavElements(res))
  }, [])

  return (
    <section>

      <h4 className="text-center my-5"><strong>Brands</strong></h4>


      <div className="row">
        {categoryNavElements.map(x=><CategoryNavElement key={x._id} name={x.name} imageUrl={x.imageUrl}/>)}
      </div>

    </section>
  )
}


export default CategoryNavigation
