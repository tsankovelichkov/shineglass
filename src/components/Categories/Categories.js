import React from 'react'
import Navigation from './Navigation';
import Product from "../Cards/Product"
import { useEffect, useState } from "react";


const Categories = ({
    match
}) => {
    const [sunglassesModelInfo, setSungalssesModelInfo] = useState([])

    let brandName = match.params.category
    let gender = match.params.gender


    useEffect(() => {
        fetch(`http://localhost:5000/brands/${brandName}/${gender}`)
            .then(res => res.json())
            .then(res => setSungalssesModelInfo(res))
    }, [brandName, gender])



    return (
        <>
            <Navigation brandName={brandName} gender={gender}/>
            <h4 className="text-center mt-4 mb-5"><strong></strong></h4>

            <section>
                <div className="row">
                    {sunglassesModelInfo.map(x => <Product key={x._id} data={x} />)}
                </div>
            </section>
        </>
    )
}

export default Categories
