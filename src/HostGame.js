import React from 'react';
import {Link } from "react-router-dom";

import Card from './shared/Card'

const HowToPlay = () => {
  return (<main>
    <header>Start Game</header>
    <Link to="/">UNO</Link>
    <Link to="/lobby"><Card title="Host Game"/></Link>
  </main>)
}

export default HowToPlay;