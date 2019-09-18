import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomePage from  './HomePage.js'

function AppRouter() {
  return (
    <Router>
      <header>
         <Link to="/">Home</Link>
        <Route path="/" exact component={HomePage} />
      </header>
    </Router>
  );
}

export default AppRouter;
