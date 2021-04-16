import { Redirect, Route, Switch } from 'react-router-dom'
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode"


import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Homepage/Main/Main"
import Contact from './components/Contact/Contact';
import AboutUs from './components/AboutUs/AboutUs';
import Categories from './components/Categories/Categories';
import ProductDetails from './components/ProductDetails/ProductDetails';
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import ClientPurchases from './components/ClientPurchases/ClientPurchases';







function App() {

  return (
    <div >
    <Route path="" exact component={Header} />
      <main>
        <div className="container">
          <Switch>
          <Route path="/" exact component={Main} />
            <Route path="/details/:id" exact component={ProductDetails} />
            <Route path="/contact" exact component={Contact}/>
            <Route path="/about-us" exact component={AboutUs}/>
            <Route path="/categories/:category/:gender" exact component={Categories}/>
            <Route path="/sign-up" exact component={SignUp}/>
            <Route path="/sign-in" exact component={SignIn}/>
            <Route path="/cart" exact component={Cart}/>
            <Route path="/your-purchases" exact component={ClientPurchases}/>
            <Route path="/checkout" exact component={Checkout}/>
            <Route path="/sign-out" exact render={props=>{
              localStorage.removeItem('user')
              return <Redirect to="/"/>
            }}/>
          </Switch>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
