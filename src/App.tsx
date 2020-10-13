import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Landing from "./pages/landing/Landing";
import Learn from "./pages/learn/Learn";
import "./assets/main.css";
import Decks from "./pages/decks/Decks";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/learn">
          <Learn />
        </Route>
        <Route path="/decks">
          <Decks />
        </Route>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
