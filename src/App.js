import { Route, Switch } from 'react-router-dom'

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Homepage/Main/Main"
import Contact from './components/Contact/Contact';




function App() {
  return (
    <div >
      <Header />
      <main>
        <div className="container">
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/contact" exact component={Contact}/>
          </Switch>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
