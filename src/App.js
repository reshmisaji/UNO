import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from  './HomePage'
import HowToPlay from  './HowToPlay'
import StartGame from  './StartGame'
import HostGame from  './HostGame'
import JoinGame from  './JoinGame'

function AppRouter() {
  return (
    <Router>
      <header>
        <Route path="/" exact component={HomePage} />
        <Route path="/howToPlay" exact component={HowToPlay} />
        <Route path="/startGame" exact component={StartGame} />
        <Route path="/hostGame" exact component={HostGame} />
        <Route path="/joinGame" exact component={JoinGame} />
      </header>
    </Router>
  );
}

export default AppRouter;
