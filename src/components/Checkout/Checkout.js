import React from 'react'
import jwt_decode from "jwt-decode"
import { useEffect, useState } from "react";

const Checkout = ({
  history
}) => {
  const [sumPrices, setSumPrices] = useState()


  useEffect(() => {
    let sum = 0

    for (const sunglass of JSON.parse(localStorage.getItem('cart'))) {
      sum += Number(sunglass.price)
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

    console.log(history)

    fetch('http://localhost:5000/add-purchases', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ accountOwner: decodedUser.email, firstName, lastName, country, address, postcode, town, phone, email, purchases })
    }).then(res => res.json())
      .then(res => history.push('/ '))





  }
  return (
    <section>


      <div class="row">


        <div class="col-lg-8 mb-4">


          <div class="card wish-list pb-1">
            <div class="card-body">

              <h5 class="mb-2">Billing details</h5>
              <form onSubmit={onPurchaseSubmitHandler}>

                <div class="row">

                  <div class="col-lg-6">



                    <div class="md-form md-outline mb-0 mb-lg-4">
                      <input type="text" name="firstName" id="firstName" class="form-control mb-0 mb-lg-2" />
                      <label for="firstName">First name</label>
                    </div>

                  </div>

                  <div class="col-lg-6">

                    <div class="md-form md-outline">
                      <input type="text" name="lastName" id="lastName" class="form-control" />
                      <label for="lastName">Last name</label>
                    </div>

                  </div>

                </div>

                <div class="md-form md-outline mt-0">
                  <input type="text" name="country" id="compnayName" class="form-control mb-0" />
                  <label for="Country">Country</label>
                </div>

                <div class="md-form md-outline">
                  <input type="text" name="address" id="form16" class="form-control" />
                  <label for="Address">Address</label>
                </div>

                <div class="md-form md-outline">
                  <input type="text" name="postcode" id="form16" class="form-control" />
                  <label for="Postcode">Postcode / ZIP</label>
                </div>


                <div class="md-form md-outline">
                  <input type="text" name="town" id="form17" class="form-control" />
                  <label for="Town">Town / City</label>
                </div>

                <div class="md-form md-outline">
                  <input type="text" name="phone" id="form17" class="form-control" />
                  <label for="Phone">Phone Number</label>
                </div>

                <div class="md-form md-outline">
                  <input type="email" name="email" id="form19" class="form-control" />
                  <label for="email">Email address</label>
                </div>

                <button type="submit" class="btn btn-primary btn-block waves-effect waves-light">Make purchase</button>

              </form>

            </div>
          </div>


        </div>


        <div class="col-lg-4">


          <div class="card mb-4">
            <div class="card-body">

              <h5 class="mb-3">The total amount of</h5>

              <ul class="list-group list-group-flush">
                <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  Temporary amount
              <span>${sumPrices}</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                  Shipping
              <span>Gratis</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                  <div>
                    <strong>The total amount of</strong>
                    <strong>
                      <p class="mb-0">(including VAT)</p>
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
