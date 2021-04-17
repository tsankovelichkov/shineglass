import React from 'react'

const ClientPurchasesCard = ({data}) => {
    return (
        <div className="row mb-4">
            <div className="col-md-5 col-lg-3 col-xl-3">
                <div className="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                    <img className="img-fluid w-100" src={data.imageUrl} alt="Sample" />
                </div>
            </div>
            <div className="col-md-7 col-lg-9 col-xl-9">
                <div>
                    <div className="d-flex justify-content-between">
                        <div>
                            <h5>{data.brandName}</h5>
                            <p className="mb-3 text-muted text-uppercase small">{data.model}</p>
                            <p className="mb-2 text-muted text-uppercase small">{data.gender}</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <p className="mb-0"><span><strong>${data.price}</strong></span></p>
                    </div>
                </div>
            </div>
            <hr className="mb-4"></hr>
        </div>
    )
}

export default ClientPurchasesCard
