import React from 'react'
import { Link } from "react-router-dom";

const CategoryNavElement = ({
    name, imageUrl,linkname
}) => {
    return (

        <div className="col-md-6 col-lg-4 mb-4">

            <div className="">
                
                <div className="view zoom brighten z-depth-2 rounded">
                    <img className="img-fluid" src={imageUrl}
                        alt="Sample" />
                    <Link to={`categories/${linkname}/all`} className="text-white">
                        <div className="mask card-mask-color waves-effect waves-light">
                            <div className="d-flex align-items-end h-100 p-3">
                                <h5 className="mb-0">{name}</h5>
                            </div>
                        </div>
                    </Link>
                </div>

            </div>

        </div>
    )
}

export default CategoryNavElement
