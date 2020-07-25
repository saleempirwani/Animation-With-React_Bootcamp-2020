import React, { useState } from 'react';
import './App.css';

import Sky from './components/Sky'
import Mountain from './components/Mountain'
import Grass from './components/Grass'
import Road from './components/Road'


function App() {

  const [isDay, setIsDay] = useState(true)

  const dayHandler = (day) => {
    setIsDay(day)
  }

  return (
    <div className='container'>
      <div className="mobile"><h1>Please use desktop or laptop screen</h1></div>
      <Sky isDay={isDay} dayHandler={dayHandler} />
      <Mountain />
      <br /><br /><br /><br />
      <Grass isDay={isDay} />
      <Road />
    </div>
  );
}

export default App;
