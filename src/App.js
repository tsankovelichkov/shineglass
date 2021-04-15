import { Route, Switch } from 'react-router-dom'
import { useEffect, useState } from "react";


import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Homepage/Main/Main"
import Contact from './components/Contact/Contact';
import AboutUs from './components/AboutUs/AboutUs';
import Categories from './components/Categories/Categories';
import ProductDetails from './components/ProductDetails/ProductDetails';
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn';










function App() {
  return (
    <div >
    <Route  path="" exact component={Header} />
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
          </Switch>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
