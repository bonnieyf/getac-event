import Header from "./tpl/Header";
import Footer from "./tpl/Footer";
import HomePage from "./component/index/HomePage";
import TradShow from "./component/TradShow";
import DownloadPdf from "./component/DownloadPdf";
import "./assets/css/getac.css";
import { HashRouter, Link, Route, Switch, Redirect } from "react-router-dom";

import i18n from "./i18n";
import history from "./history";

function langRedirect(props) {
  const defaultLang = i18n.language;
  const pathname = window.location.pathname;
  const redirectPath = `${pathname}${defaultLang}${
    props.history.location.pathname
  }`;
  props.history.replace({
    pathname: redirectPath,
  });
}

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HashRouter history={history}>
          <Switch>
            <Route exact path="/:lang/">
              <HomePage />
              <Footer />
            </Route>
            <Route path="/:lang/tradshow" component={TradShow} />
            <Route path="/:lang/downlaod" component={DownloadPdf} />
            <Route path="*" render={langRedirect} />
          </Switch>
        </HashRouter>
      </main>
    </div>
  );
}

export default App;
