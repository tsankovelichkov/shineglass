import { Route, Switch } from 'react-router-dom'

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Homepage/Main/Main"




function App() {
  return (
    <div >
      <Header />
      <main>
        <div className="container">
          <Switch>
            <Route path="/" component={Main} />
          </Switch>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
