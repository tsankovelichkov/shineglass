import React from 'react'

const BestsellerBlockContentCard = ({data}) => {

  console.log(data)

  return (
    <div class="col-md-4 mb-5">
      <div class="card">

        <div class="view zoom overlay">
          <img class="img-fluid w-100"
            src={data.imageUrl} alt="Sample" />
          <a href="#!">
            <div class="mask waves-effect waves-light">
              <img class="img-fluid w-100"
                src={data.imageUrl} />
              <div class="mask rgba-black-slight waves-effect waves-light"></div>
            </div>
          </a>
        </div>

        <div class="card-body text-center pt-4">

          <h5>{data.name}</h5>
          <p class="mb-2 text-muted text-uppercase small">{data.model}</p>
          <div>
            <p><span class="mr-1"><strong>${data.price}</strong></span></p>
            <button type="button" class="btn btn-primary btn-sm mr-1 mb-2 waves-effect waves-light"><i
              class="fas fa-shopping-cart pr-2"></i>Add to cart</button>
            <button type="button" class="btn btn-light btn-sm mr-1 mb-2 waves-effect waves-light"><i
              class="fas fa-info-circle pr-2"></i>Details</button>
          </div>
        </div>

      </div>
    </div>
  )

}

export default BestsellerBlockContentCard
