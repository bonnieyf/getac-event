import Header from "./tpl/Header";
import Footer from "./tpl/Footer";
import HomePage from "./component/index/HomePage";
import TradShow from "./component/TradShow";
import DownloadPdf from "./component/DownloadPdf";
import "./assets/css/getac.css";
import { BrowserRouter, Link, Route, Switch, Redirect } from "react-router-dom";

import { useReducer } from "react";
import i18n from "./i18n";
import history from "./history";

function langRedirect(props) {
  const defaultLang = i18n.language;
  const redirectPath = `/${defaultLang}${props.history.location.pathname}`;
  props.history.replace({
    pathname: redirectPath,
  });
}

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <BrowserRouter
          history={history}
          basename={`/getac-event/${process.env.PUBLIC_URL}`}
        >
          <Switch>
            <Route exact path="/:lang">
              <HomePage />
              <Footer />
            </Route>
            <Route path="/:lang/tradshow/" component={TradShow} />
            <Route path="/:lang/downlaod/" component={DownloadPdf} />
            <Route path="*" render={langRedirect} />
          </Switch>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
