import React from 'react'
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode"

import ClientPurchasesCard from "../Cards/ClientPurchasesCard"



const ClientPurchases = ({
    history
}) => {
    const [products, setProducts] = useState()




    

    useEffect(() => {
    let user = localStorage.getItem('user')
    let decodedUser=jwt_decode(user)
    console.log(decodedUser)
    fetch('http://localhost:5000/get-purchases', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({email:decodedUser.email})
    }).then(res => res.json())
      .then(res => setProducts(res))


    }, [])

    console.log(products)
    return (
        <main>
            <h4 className="text-center mt-4 mb-5"><strong>Purchases</strong></h4>

            <div class="container center">


                <section class="mt-5 mb-4">

                    <div class="row">


                        <div class="col-lg-8">
                            <div class="card wish-list mb-4">
                                <div class="card-body">
                                {products? products.map(x => <ClientPurchasesCard data={x} />) : <h3>No Purchases</h3>}
                                </div>

                            </div>
                        </div>    
                    </div>        
                </section>
            </div>
        </main>
    )
}

export default ClientPurchases
