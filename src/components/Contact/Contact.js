import React from 'react'
import "./Contact.css"
import Iframe from 'react-iframe'

const Contact = () => {
    return (
        <main>
            <section className="text-center text-lg-left dark-grey-text mb-4">


                <div className="row d-flex justify-content-center">


                    <div id="map-container-google-1" className="z-depth-1 map-container mb-5">
                        <Iframe title="Google maps"   url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1221.2814677872027!2d21.044575420669666!3d52.251321896813074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecd8b5406f107%3A0xb8d026a78c432c99!2sMDBootstrap!5e0!3m2!1spl!2spl!4v1584546471245!5m2!1spl!2spl" frameBorder="0" allowFullScreen="" />
                    </div>

                    <div className="row">
                        <div className="col-lg-5 col-md-12 mb-0 mb-md-0">
                            <h4 className="mb-3"><strong>Office</strong></h4>
                            <div>

                                <p className="mb-1"><strong>Address:</strong> </p>

                                <p className="mb-1">Kijowska 7/U5</p>
                                <p className="mb-1">Warsaw, 03-738</p>
                                <p className="mb-1">Poland</p>

                            </div>
                            <p className="mb-1"><strong>Company tax ID:</strong> </p>

                            <p className="mb-1">US2542911940</p>
                        </div>

                        <div className="col-lg-7 col-md-12 mb-4 mb-md-0 text-center">


                            <form className="">

                                <div className="md-form md-outline">
                                    <input type="text" id="form-subject" className="form-control" />
                                    <label htmlFor="form-subject">Name</label>
                                </div>

                                <div className="md-form md-outline mt-3">
                                    <input type="email" id="form-email" className="form-control" />
                                    <label htmlFor="form-email">E-mail</label>
                                </div>

                                <div className="md-form md-outline">
                                    <textarea id="form76" className="md-textarea form-control" rows="4"></textarea>
                                    <label htmlFor="form76">Your message</label>

                                </div>

                                <button type="submit" className="btn btn-primary btn-md ml-0 waves-effect waves-light">Send</button>

                            </form>




                        </div>
                    </div>


                </div>
            </section>
        </main>
    )
}

export default Contact
