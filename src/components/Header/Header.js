import React from 'react'
import { Link } from "react-router-dom"
import "./Header.css"

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-light fixed-top scrolling-navbar navbar-transparent">

        <div className="container-fluid">
          <a className="navbar-brand" href="https://mdbecommerce.com/">
            <i>shineGlass</i>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
            aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="basicExampleNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a href="#!" className="nav-link navbar-link-2 waves-effect">
                  <span className="badge badge-pill red">1</span>
                  <i className="fas fa-shopping-cart pl-0"></i>
                </a>
              </li>
              <li className="nav-item">
                <a href="#!" className="nav-link waves-effect">
                  About Us
              </a>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link waves-effect">
                  Contact
              </Link>
              </li>
              <li className="nav-item">
                <a href="#!" className="nav-link waves-effect">
                  Sign in
              </a>
              </li>
              <li className="nav-item pl-2 mb-2 mb-md-0">
                <a href="#!" type="button"
                  className="btn btn-outline-info btn-md btn-rounded btn-navbar waves-effect waves-light">Sign
                up</a>
              </li>
            </ul>

          </div>
        </div>
      </nav>
      <div className="jumbotron jumbotron-image color-grey-light bckg-img">
      </div>
    </header>
  )
}

export default Header
