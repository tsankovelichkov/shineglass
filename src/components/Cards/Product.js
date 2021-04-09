import React from 'react'

const Product = ({data}) => {
  return (
    <div className="col-md-4 mb-5">
      <div className="card">

        <div className="view zoom overlay">
          <img className="img-fluid w-100"
            src={data.imageUrl} alt="Sample" />
          <a href="#!">
            <div className="mask waves-effect waves-light">
              <img className="img-fluid w-100"
                src={data.imageUrl} alt="Sample"/>
              <div className="mask rgba-black-slight waves-effect waves-light"></div>
            </div>
          </a>
        </div>

        <div className="card-body text-center pt-4">

          <h5>{data.name}</h5>
          <p className="mb-2 text-muted text-uppercase small">{data.model}</p>
          <div>
            <p><span className="mr-1"><strong>${data.price}</strong></span></p>
            <button type="button" className="btn btn-primary btn-sm mr-1 mb-2 waves-effect waves-light"><i
              className="fas fa-shopping-cart pr-2"></i>Add to cart</button>
            <button type="button" className="btn btn-light btn-sm mr-1 mb-2 waves-effect waves-light"><i
              className="fas fa-info-circle pr-2"></i>Details</button>
          </div>
        </div>

      </div>
    </div>
  )

}

export default Product