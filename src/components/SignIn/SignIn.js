import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";



const SignIn = ({
    history
}) => {
    const [error, setError] = useState()

    const onSignInSubmitHandler = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        fetch('http://localhost:5000/auth/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        }).then(res => res.json())
            .then(token => { localStorage.setItem("user", token) })
            .then(res => history.push('/'))
            .catch(err => {
                setError('Incorrect email or password!')
                setTimeout(function () { setError(undefined) }, 3000)
            })


    }
    return (
        <main>

            <div className="container">
                <h4 className="text-center mt-4 mb-5"><strong>Sign In</strong></h4>

                <div className="row d-flex justify-content-center">

                    <div className="col-md-6">


                        <section className="mb-5">

                            <form action="#!" onSubmit={onSignInSubmitHandler}>
                                {error ? (<div class="alert alert-danger" role="alert">
                                    {error}
                                </div>) : <></>}

                                <div className="md-form md-outline">
                                    <input type="email" name="email" id="defaultForm-email1" className="form-control" />
                                    <label data-error="wrong" data-success="right" htmlFor="defaultForm-email1">Your email</label>
                                </div>
                                <div class="md-form md-outline">
                                    <input type="password" name="password" id="defaultForm-pass1" className="form-control" />
                                    <label data-error="wrong" data-success="right" htmlFor="defaultForm-pass1">Your password</label>
                                </div>

                                <div className="text-center mb-2">

                                    <button type="submit" className="btn btn-primary mb-4 waves-effect waves-light">Sign In</button>

                                </div>

                            </form>

                            <div className="text-center pb-2">
                                <p>Not a member? <Link to="/sign-up" >Register</Link></p>
                            </div>
                        </section>


                    </div>


                </div>



            </div>
        </main>
    )
}

export default SignIn
