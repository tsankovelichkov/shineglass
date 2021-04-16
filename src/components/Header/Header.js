import React from 'react'
import { Link } from "react-router-dom"
import "./Header.css"
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode"

const Header = () => {

  const [user, setUser] = useState()

  let token = localStorage.getItem('user')

  useEffect(() => {
    if (token) {
      let decodedToken = jwt_decode(token)
      setUser(decodedToken)
    } else {
      setUser(null)
    }
  }, [token])
  
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-light fixed-top scrolling-navbar navbar-transparent">

        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <i>shineGlass</i>
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
            aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="basicExampleNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/cart" className="nav-link navbar-link-2 waves-effect">
                  <span className="badge badge-pill red">1</span>
                  <i className="fas fa-shopping-cart pl-0"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about-us" className="nav-link waves-effect">
                  About Us
              </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link waves-effect">
                  Contact
              </Link>
              </li>
              {user ? (
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink-333" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">
                    <i class="fas fa-user"></i>
                  </a>
                  <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink-333">
                    <h5 class="center" >Hello,{`${user.firstName} ${user.lastName}`}</h5>
                    <Link to="/your-purchases" class="dropdown-item" >Your Purchases</Link>
                    <Link class="dropdown-item" to="/sign-out">Sign Out</Link>
                  </div>
                </li>
              ) : (
                <>
                  <li className="nav-item">
                    <Link to="/sign-in" className="nav-link waves-effect">
                      Sign in
              </Link>
                  </li>
                  <li className="nav-item pl-2 mb-2 mb-md-0">
                    <Link to="/sign-up" type="button"
                      className="btn btn-outline-info btn-md btn-rounded btn-navbar waves-effect waves-light">Sign
                up</Link>
                  </li>
                </>
              )}
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
