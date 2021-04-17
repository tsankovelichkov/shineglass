import React from 'react'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


import CartCard from '../Cards/CartCard'

const Cart = () => {
    const [products, setProducts] = useState()
    const [sumPrices, setSumPrices] = useState()


    let cart = localStorage.getItem('cart')
    

    useEffect(() => {
        let sum = 0

        if (cart) {
            setProducts(JSON.parse(cart))

            if(JSON.parse(cart).length){
                setProducts(JSON.parse(cart))
                for (const product of JSON.parse(cart)) {
                   sum+=Number(product.price) 
                }
            }else{
                setProducts([JSON.parse(cart)])
                sum+=Number(JSON.parse(cart).price)
            }
        }

        setSumPrices(sum)

    }, [cart])

   

    return (
        <main>
            <h4 className="text-center mt-4 mb-5"><strong>Cart</strong></h4>

            <div class="container">


                <section class="mt-5 mb-4">

                    <div class="row">


                        <div class="col-lg-8">
                            <div class="card wish-list mb-4">
                                <div class="card-body">
                                    {products? products.map(x => <CartCard id={x._id} data={x} />) : <h3>No Cart Products</h3>}
                                    <p class="text-primary mb-0"><i class="fas fa-info-circle mr-1"></i> Do not delay the purchase, adding
                items to your cart does not mean booking them.</p>
                                </div>

                            </div>
                            <div class="card mb-4">
                                <div class="card-body">

                                    <h5 class="mb-4">We accept</h5>

                                    <img class="mr-2" width="45px" src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg" alt="Visa" />
                                    <img class="mr-2" width="45px" src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg" alt="American Express" />
                                    <img class="mr-2" width="45px" src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg" alt="Mastercard" />
                                </div>
                            </div>
                        </div>
                        {products ? (
                            <div class="col-lg-4">
                            <div class="card mb-4">
                                <div class="card-body">

                                    <h5 class="mb-3">The total amount of</h5>

                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                            Temporary amount
                                        <span>${sumPrices}</span>
                                        </li>
                                        <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                                            Shipping
                                        <span>Gratis</span>
                                        </li>
                                        <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                            <div>
                                                <strong>The total amount of</strong>
                                                <strong>
                                                    <p class="mb-0">(including VAT)</p>
                                                </strong>
                                            </div>
                                            <span><strong>${sumPrices}</strong></span>
                                        </li>
                                    </ul>

                                    <Link to="/checkout"  type="button" class="btn btn-primary btn-block waves-effect waves-light">go to
    checkout</Link>

                                </div>
                            </div>
                            </div>
                        ) : (<></>)}
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Cart
