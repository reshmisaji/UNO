import React from 'react';
import {Link } from "react-router-dom";

import Card from './shared/Card'

const HomePage = () => {
  return (<main>
    <header>Home Page...</header>
    <Link to="/startGame"><Card title="Start Game"/></Link>
    <Link to="/howToPlay"><Card  title="How To Play"/></Link>
  </main>)
}

export default HomePage;