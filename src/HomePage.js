import React from 'react';
import Card from './shared/Card'

const HomePage = () => {
  const  props = {width:'251px',height:'352px',border:'black'};
  return (<main>
    <Card {...props}/>
    <Card {...props}/>
  </main>)
}

export default HomePage;