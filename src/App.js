import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Overview } from "./pages/Overview";
import { Testimonials } from "./pages/Testimonials";
import { FindUs } from "./pages/Find_us";
import { Contact } from "./pages/Contact";
import { NoMatch } from "./pages/NoMatch";
import { CaseOne } from "./pages/CaseOne";
import { Layout } from "./components/Layout";
import { NavigationBar } from "./components/NavigationBar";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavigationBar />
          <Layout>
            <Switch>
              <Route exact path="/" component={Overview} />
              <Route path="/testimonials" component={Testimonials} />
              <Route path="/find_us" component={FindUs} />
              <Route path="/contact" component={Contact} />
              <Route path="/caseone" component={CaseOne} />
              <Route component={NoMatch} />
            </Switch>
          </Layout>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
