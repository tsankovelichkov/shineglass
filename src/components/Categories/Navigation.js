import React from 'react'
import { Link } from "react-router-dom";

const Navigation = ({brandName,gender}) => {
    return (
        <>
            <section>

                <h4 className="text-center my-5"><strong>{brandName}</strong></h4>


                <div className="row">
                    <div className="col-md-6 col-lg-4 mb-4">

                        <div className="">

                            <div className="view zoom brighten z-depth-2 rounded">
                                <img className="img-fluid" src="http://ruthrose.co.uk/wp-content/uploads/2018/05/rayban-shoot-photoshoot-sunglasses-advertising-photographer-london-charlotte-hole-blogger-2Z5A2465-f1.jpg"
                                    alt="Sample" />
                                <Link to={`/categories/${brandName}/all`} className="text-white">
                                    <div className="mask card-mask-color waves-effect waves-light">
                                        <div className="d-flex align-items-end h-100 p-3">
                                            <h5 className="mb-0">All</h5>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                        </div>

                    </div>
                    <div className="col-md-6 col-lg-4 mb-4">

                        <div className="">

                            <div className="view zoom brighten z-depth-2 rounded">
                                <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/new/img(2).jpg"
                                    alt="Sample" />
                                <Link to={`/categories/${brandName}/women`} className="text-white">
                                    <div className="mask card-mask-color waves-effect waves-light">
                                        <div className="d-flex align-items-end h-100 p-3">
                                            <h5 className="mb-0">Women</h5>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                        </div>

                    </div>
                    <div className="col-md-6 col-lg-4 mb-4">

                        <div className="">

                            <div className="view zoom brighten z-depth-2 rounded">
                                <img className="img-fluid" src="https://c4.wallpaperflare.com/wallpaper/316/586/544/men-model-beard-man-wallpaper-preview.jpg"
                                    alt="Sample" />
                                <Link to={`/categories/${brandName}/men`} className="text-white">
                                    <div className="mask card-mask-color waves-effect waves-light">
                                        <div className="d-flex align-items-end h-100 p-3">
                                            <h5 className="mb-0">Men</h5>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                        </div>

                    </div>
                </div>
                
               

            </section>
        </>
    )
}

export default Navigation
