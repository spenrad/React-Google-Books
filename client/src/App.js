import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search/index";
import Saved from "./pages/Saved/index";
import NoMatch from "./pages/NoMatch/index";
import Nav from "./components/Nav/index";
import Header from "./components/Header/index"

import "./App.css";


function App() {
  return (
    <Router>
      <Nav />
      <Header />
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
