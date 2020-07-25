import React from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";

import Sun from './Sun'
import Bird from './Bird'
import Cloud from './Cloud'

function Sky({ isDay, dayHandler }) {

    return (

        <div className="sky" style={{ background: isDay ? 'lightblue' : 'grey' }}>

            <Sun dayHandler={dayHandler} isDay={isDay} />
            <Bird />
            <Cloud />

        </div>

    );
}

export default Sky;
