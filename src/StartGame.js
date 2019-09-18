import React from 'react';
import {Link } from "react-router-dom";

import Card from './shared/Card'

const HowToPlay = () => {
  return (<main>
    <header>Start Game</header>
    <Link to="/">UNO</Link>
    <Link to="/hostGame"><Card title="Host Game"/></Link>
    <Link to="/joinGame"><Card  title="Join Game"/></Link>
    <Link to="/loadGame"><Card  title="Load Game"/></Link>
  </main>)
}

export default HowToPlay;