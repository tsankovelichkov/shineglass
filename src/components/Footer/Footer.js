import React from 'react'
import { Link } from "react-router-dom";


const Footer = () => {

    return (

        <footer className="page-footer font-small elegant-color">


            <div className="container">

                <div className="row">


                    <div className="col my-5">


                        <ul className="list-unstyled d-flex justify-content-center align-items-center mb-0">
                            <li>
                                <h5 className="mb-0 mr-3">Register for free</h5>
                            </li>
                            <li>
                                <Link to="/sign-up" className="btn btn-outline-white btn-rounded">Sign up!</Link>
                            </li>
                        </ul>

                    </div>


                </div>


            </div>

            <div className="footer-copyright text-center py-3">© 2020 Copyright:
               <Link href="https://mdbootstrap.com/"> MDBootstrap.com</Link>
            </div>

        </footer>

    )
}

export default Footer
