import { Route, Switch } from 'react-router-dom'

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CategoryNavigation from "./components/Homepage/CategoryNavigation/CategoryNavigation"




function App() {
  return (
    <div >
      <Header />
      <main>
        <div className="container">
          <Switch>
            <Route path="/" component={CategoryNavigation} />
          </Switch>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
