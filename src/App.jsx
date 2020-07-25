import React, { useState, useEffect } from 'react';
import './App.css';

import Sky from './components/Sky'
import Mountain from './components/Mountain'
import Grass from './components/Grass'
import Road from './components/Road'


function App() {

  const [isDay, setIsDay] = useState(false)

  useEffect(() => {

    setInterval(() => {
      if (isDay) setIsDay(false)
      else setIsDay(true)
    }, 7000);

  }, [isDay])


  return (
    <div className='container'>
      <div className="mobile"><h1>Please use desktop or laptop screen</h1></div>
      <Sky isDay={isDay} />
      <Mountain />
      <br /><br /><br /><br />
      <Grass isDay={isDay} />
      <Road />
    </div>
  );
}

export default App;
