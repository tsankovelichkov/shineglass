import React from 'react'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light">

      <a className="navbar-brand" href="#!">
        <img src="shineGlass.png" height="70" width="100" alt="mdb logo" />
      </a>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav1"
        aria-controls="basicExampleNav1" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <ol className="breadcrumb">
        <li className="breadcrumb-item"><a className="waves-effect" href="#!">Home</a></li>
        <li className="breadcrumb-item"><a className="waves-effect" href="#!">About</a></li>
        <li className="breadcrumb-item active"><a className="waves-effect" href="#!">Contact us</a></li>
      </ol>

      <div className="collapse navbar-collapse" id="basicExampleNav1">

        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a href="#!" className="nav-link navbar-link-2 waves-effect">
              <span className="badge badge-pill red">1</span>
              <i className="fas fa-shopping-cart pl-0"></i>
            </a>
          </li>
          <li className="nav-item">
            <a href="#!" className="nav-link waves-effect">
              Shop
        </a>
          </li>
          <li className="nav-item">
            <a href="#!" className="nav-link waves-effect">
              Sign in
        </a>
          </li>
          <li className="nav-item pl-2 mb-2 mb-md-0">
            <a href="#!" type="button"
              className="btn btn-outline-info btn-md btn-rounded btn-navbar waves-effect waves-light">Sign up</a>
          </li>
        </ul>

      </div>

    </nav>
  )
}

export default Header
