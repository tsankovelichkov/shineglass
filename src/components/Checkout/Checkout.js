import React from 'react'
import jwt_decode from "jwt-decode"
import { useEffect, useState } from "react";

const Checkout = ({
  history
}) => {
  const [sumPrices, setSumPrices] = useState()
  const [error, setError] = useState()

  useEffect(() => {
    let sum = 0
    let cart = JSON.parse(localStorage.getItem('cart'))
    if (cart.length) {
      for (const sunglass of cart) {
        sum += Number(sunglass.price)
      }
    } else {
      sum += Number(cart.price)
    }

    setSumPrices(sum)

  }, [])

  console.log(sumPrices)

  const onPurchaseSubmitHandler = (e) => {
    e.preventDefault()
    let user = localStorage.getItem('user')
    let decodedUser

    if (user) {
      decodedUser = jwt_decode(user)
    } else {
      decodedUser = { email: 'none' }
    }
    const purchases = JSON.parse(localStorage.getItem('cart'))
    const firstName = e.target.firstName.value
    const lastName = e.target.lastName.value
    const country = e.target.country.value
    const address = e.target.address.value
    const postcode = e.target.postcode.value
    const town = e.target.town.value
    const phone = e.target.phone.values
    const email = e.target.email.value

    if (firstName === "" || lastName === "" || country === "" || address === "" || postcode === "" || town === "" || phone ==="" || email === "") {
      setError('You need to fullfill all gapses!')
      setTimeout(function () { setError(undefined) }, 3000)
      return
    }

    fetch('http://localhost:5000/add-purchases', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ accountOwner: decodedUser.email, firstName, lastName, country, address, postcode, town, phone, email, purchases })
    }).then(res => res.json())
      .then(res => localStorage.removeItem('cart'))
      .then(res => {
        history.push('/')
      })
      .catch(err => {
        setError('You need to fullfill all gapses!')
        setTimeout(function () { setError(undefined) }, 3000)
      })





  }
  return (
    <section>


      <div className="row">


        <div className="col-lg-8 mb-4">


          <div className="card wish-list pb-1">
            <div className="card-body">

              <h5 className="mb-2">Billing details</h5>
              <form onSubmit={onPurchaseSubmitHandler}>
                {error ? (<div class="alert alert-danger" role="alert">
                  {error}
                </div>) : <></>}
                <div className="row">

                  <div className="col-lg-6">



                    <div className="md-form md-outline mb-0 mb-lg-4">
                      <input type="text" name="firstName" id="firstName" class="form-control mb-0 mb-lg-2" />
                      <label for="firstName">First name</label>
                    </div>

                  </div>

                  <div className="col-lg-6">

                    <div className="md-form md-outline">
                      <input type="text" name="lastName" id="lastName" class="form-control" />
                      <label for="lastName">Last name</label>
                    </div>

                  </div>

                </div>

                <div className="md-form md-outline mt-0">
                  <input type="text" name="country" id="compnayName" class="form-control mb-0" />
                  <label for="Country">Country</label>
                </div>

                <div className="md-form md-outline">
                  <input type="text" name="address" id="form16" class="form-control" />
                  <label for="Postcode">Address</label>
                </div>

                <div className="md-form md-outline">
                  <input type="text" name="postcode" id="form16" class="form-control" />
                  <label for="Postcode">Postcode / ZIP</label>
                </div>


                <div className="md-form md-outline">
                  <input type="text" name="town" id="form17" class="form-control" />
                  <label for="Town">Town / City</label>
                </div>

                <div className="md-form md-outline">
                  <input type="text" name="phone" id="form17" class="form-control" />
                  <label for="Phone">Phone Number</label>
                </div>

                <div className="md-form md-outline">
                  <input type="email" name="email" id="form19" class="form-control" />
                  <label for="email">Email address</label>
                </div>
                <p className="text-primary mb-0"><i class="fas fa-info-circle mr-1"></i> You need to be aware that if you don not have account the information about the purchase will be recieved only by phone number.</p>

                <button type="submit" class="btn btn-primary btn-block waves-effect waves-light">Make purchase</button>

              </form>

            </div>
          </div>


        </div>


        <div className="col-lg-4">


          <div className="card mb-4">
            <div className="card-body">

              <h5 className="mb-3">The total amount of</h5>

              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  Temporary amount
              <span>${sumPrices}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                  Shipping
              <span>Gratis</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                  <div>
                    <strong>The total amount of</strong>
                    <strong>
                      <p className="mb-0">(including VAT)</p>
                    </strong>
                  </div>
                  <span><strong>${sumPrices}</strong></span>
                </li>
              </ul>
              </div>
          </div>





          </div>


        </div>


    </section>
  )
}

export default Checkout
