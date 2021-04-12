import { Route, Switch } from 'react-router-dom'

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Homepage/Main/Main"
import Contact from './components/Contact/Contact';
import AboutUs from './components/AboutUs/AboutUs';
import Categories from './components/Categories/Categories';
import ProductDetails from './components/ProductDetails/ProductDetails';
import SignUp from './components/SignUp/SignUp';






function App() {
  return (
    <div >
      <Header />
      <main>
        <div className="container">
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/details/:id" exact component={ProductDetails} />
            <Route path="/contact" exact component={Contact}/>
            <Route path="/about-us" exact component={AboutUs}/>
            <Route path="/categories/:category/:gender" exact component={Categories}/>
            <Route path="/sign-up" exact component={SignUp}/>
          </Switch>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
