import React from 'react'

const ProductDetails = () => {
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
                                        <a href="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg"
                                            data-size="710x823">
                                            <img alt="DetailsImg" src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg"
                                                class="img-fluid z-depth-1" />
                                        </a>
                                    </figure>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="col-md-6">

                        <h5>Fantasy T-shirt</h5>
                        <p class="mb-2 text-muted text-uppercase small">Shirts</p>
                        <p><span class="mr-1"><strong>$12.99</strong></span></p>
                        <p class="pt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sapiente illo. Sit
                        error voluptas repellat rerum quidem, soluta enim perferendis voluptates laboriosam. Distinctio,
        officia quis dolore quos sapiente tempore alias.</p>
                        <div class="table-responsive">
                            <table class="table table-sm table-borderless mb-0">
                                <tbody>
                                    <tr>
                                        <th class="pl-0 w-25" scope="row"><strong>Model</strong></th>
                                        <td>Shirt 5407X</td>
                                    </tr>
                                    <tr>
                                        <th class="pl-0 w-25" scope="row"><strong>Color</strong></th>
                                        <td>Black</td>
                                    </tr>
                                    <tr>
                                        <th class="pl-0 w-25" scope="row"><strong>Delivery</strong></th>
                                        <td>USA, Europe</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <button type="button" class="btn btn-light btn-md mr-1 mb-2"><i
                            class="fas fa-shopping-cart pr-2"></i>Add to cart</button>
                    </div>
                </div>

            </section>
        </>
    )
}

export default ProductDetails
