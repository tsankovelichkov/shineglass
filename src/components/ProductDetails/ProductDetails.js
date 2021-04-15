import React from 'react'
import { useEffect, useState } from "react";



const ProductDetails = ({
    match
}) => {

    const [specificSunglass, setSpecificSunglass] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/brands/details/${match.params.id}`)
            .then(res => res.json())
            .then(res => setSpecificSunglass(res))
    }, [match.params.id])


    const addToCartHandler = (e) => {
        let cart = localStorage.getItem('cart')
        if (!cart) {
            localStorage.setItem('cart', [JSON.stringify({
                id: specificSunglass._id,
                brandName: specificSunglass.name,
                imageUrl: specificSunglass.imageUrl,
                model: specificSunglass.model,
                price: specificSunglass.price,
                gender: specificSunglass.gender
            })])
        } else {
            if (!JSON.parse(cart).length) {
                let arrayOfProducts = []
                arrayOfProducts.push(JSON.parse(cart))
                arrayOfProducts.push({
                    id: specificSunglass._id,
                    brandName: specificSunglass.name,
                    imageUrl: specificSunglass.imageUrl,
                    model: specificSunglass.model,
                    price: specificSunglass.price,
                    gender: specificSunglass.gender
                })
                localStorage.setItem('cart', JSON.stringify(arrayOfProducts))
            } else {
                let products = JSON.parse(cart)
                products.push({
                    id: specificSunglass._id,
                    brandName: specificSunglass.name,
                    imageUrl: specificSunglass.imageUrl,
                    model: specificSunglass.model,
                    price: specificSunglass.price,
                    gender: specificSunglass.gender
                })
                localStorage.setItem('cart', JSON.stringify(products))
            }
        }
    }


    return (
        <>
            <section class="mb-5">

                <div class="row">
                    <div class="col-md-6 mb-4 mb-md-0">

                        <div id="mdb-lightbox-ui"></div>

                        <div class="mdb-lightbox">

                            <div class="row product-gallery mx-1">

                                <div class="col-12 mb-0">
                                    <figure class="view overlay rounded z-depth-1 main-img">
                                        <a href='/'
                                            data-size="710x823">
                                            <img alt="DetailsImg" src={specificSunglass.imageUrlDetailsPage}
                                                class="img-fluid z-depth-1" />
                                        </a>
                                    </figure>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="col-md-6">

                        <h5>{specificSunglass.name}</h5>
                        <p class="mb-2 text-muted text-uppercase small">{specificSunglass.model}</p>
                        <p><span class="mr-1"><strong>${specificSunglass.price}</strong></span></p>
                        <div class="table-responsive">
                            <table class="table table-sm table-borderless mb-0">
                                <tbody>
                                    <tr>
                                        <th class="pl-0 w-25" scope="row"><strong>Model</strong></th>
                                        <td>{specificSunglass.model}</td>
                                    </tr>
                                    <tr>
                                        <th class="pl-0 w-25" scope="row"><strong>Delivery</strong></th>
                                        <td>USA, Europe</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <hr></hr>
                        <div class="table-responsive mb-2">
                            <table class="table table-sm table-borderless">
                                <tbody>
                                    <tr>
                                        <td class="pb-0">Select size</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="mt-1">
                                                <div class="form-check form-check-inline pl-0">
                                                    <input type="radio" class="form-check-input" id="small" name="materialExampleRadios"
                                                    />
                                                    <label class="form-check-label small text-uppercase card-link-secondary"
                                                        for="small">Small</label>
                                                </div>
                                                <div class="form-check form-check-inline pl-0">
                                                    <input type="radio" class="form-check-input" id="medium" name="materialExampleRadios" />
                                                    <label class="form-check-label small text-uppercase card-link-secondary"
                                                        for="medium">Medium</label>
                                                </div>
                                                <div class="form-check form-check-inline pl-0">
                                                    <input type="radio" class="form-check-input" id="large" name="materialExampleRadios" />
                                                    <label class="form-check-label small text-uppercase card-link-secondary"
                                                        for="large">Large</label>
                                                </div>
                                            </div>

                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <button type="button" onClick={addToCartHandler} class="btn btn-light btn-md mr-1 mb-2"><i
                            class="fas fa-shopping-cart pr-2"></i>Add to cart</button>
                    </div>
                </div>

            </section>
        </>
    )
}

export default ProductDetails
