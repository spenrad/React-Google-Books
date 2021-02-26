import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

import "./App.css";


function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/search" component={Search} />
        <Route exact path="/saved"  component={Saved} />
        <Route exact path="/" component = {Search} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
}


export default App;
