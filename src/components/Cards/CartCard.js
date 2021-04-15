import React from 'react'

const CartCard = ({data}) => {
    const removeHandler=()=>{
        let cart = JSON.parse(localStorage.getItem('cart'))
        if(!cart.length){
            localStorage.setItem('cart',[])
        }else{
            let result = cart.filter(x=>x._id!=data._id)
            console.log(result)
            localStorage.setItem('cart',JSON.stringify(result))
        }
    }
    return (
        <div class="row mb-4">
            <div class="col-md-5 col-lg-3 col-xl-3">
                <div class="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                    <img class="img-fluid w-100" src={data.imageUrl} alt="Sample" />
                </div>
            </div>
            <div class="col-md-7 col-lg-9 col-xl-9">
                <div>
                    <div class="d-flex justify-content-between">
                        <div>
                            <h5>{data.brandName}</h5>
                            <p class="mb-3 text-muted text-uppercase small">{data.model}</p>
                            <p class="mb-2 text-muted text-uppercase small">{data.gender}</p>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between align-items-center">
                        <div>
                            <button type="button" onClick={removeHandler} class="card-link-secondary small text-uppercase mr-3"><i class="fas fa-trash-alt mr-1"></i> Remove item </button>
                        </div>
                        <p class="mb-0"><span><strong>${data.price}</strong></span></p>
                    </div>
                </div>
            </div>
            <hr class="mb-4"></hr>
        </div>

    )
}

export default CartCard
