import Header from "./tpl/Header";
import Footer from "./tpl/Footer";
import HomePage from "./component/index/HomePage";
import TradShow from "./component/TradShow";
import "./assets/css/getac.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <main>
          <Switch>
            <Route exact path="/">
              <HomePage />
              <Footer />
            </Route>
            <Route path="/tradshow/" component={TradShow}></Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
