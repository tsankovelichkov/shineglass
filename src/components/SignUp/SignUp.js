import React from 'react'

const SignUp = () => {

  const onSignUpSubmitHandler = (e) => {
    e.preventDefault()
    const firstName=e.target.firstName.value
    const lastName=e.target.lastName.value
    const email=e.target.email.value
    const password=e.target.password.value
    const repeatPassword=e.target.repeatPassword.value

    console.log(firstName,lastName,email,password,repeatPassword)

  }



  return (
    <main>
      <h4 className="text-center mt-4 mb-5"><strong>Sign Up</strong></h4>

      <div className="container">

        <div className="row d-flex justify-content-center">

          <div className="col-md-6">

            <section className="mt-4 mb-5">

              <form action="#!" onSubmit={onSignUpSubmitHandler}>

                <div className="form-row">
                  <div className="col">
                    <div className="md-form md-outline mt-0">
                      <input type="text" name="firstName" id="materialRegisterFormFirstName" className="form-control" />
                      <label htmlFor="materialRegisterFormFirstName">First name</label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="md-form md-outline mt-0">
                      <input type="text" name="lastName" id="materialRegisterFormLastName" className="form-control" />
                      <label htmlFor="materialRegisterFormLastName">Last name</label>
                    </div>
                  </div>
                </div>

                <div className="md-form md-outline mt-0">
                  <input type="email" name="email" id="defaultForm-email2" className="form-control" />
                  <label data-error="wrong" data-success="right" htmlFor="defaultForm-email2">Your email</label>
                </div>
                <div className="md-form md-outline mt-0">
                  <input type="password" name="password" id="defaultForm-pass2" className="form-control" />
                  <label data-error="wrong" data-success="right" htmlFor="defaultForm-pass2">Your password</label>
                  <small id="materialRegisterFormPasswordHelpBlock" className="form-text text-muted mb-4">
                    At least 8 characters and 1 digit
                </small>
                </div>
                <div className="md-form md-outline mt-0">
                  <input type="password" name="repeatPassword" id="defaultForm-email2" className="form-control" />
                  <label data-error="wrong" data-success="right" htmlFor="defaultForm-email2">Repeat Password</label>
                </div>

                <div className="text-center mb-2">

                <button type="submit" className="btn btn-primary mb-4 waves-effect waves-light">Sign Up</button>

              </div>

              </form>

            </section>

          </div>


        </div>



      </div>
    </main>
  )
}

export default SignUp
