import React from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";

import sun from '../image/sun.png'
import moon from '../image/moon.png'

import Bird from './Bird'
import Cloud from './Cloud'

function Sky({ isDay }) {

    const { ref } = useWebAnimations({

        keyframes: [
            { transform: 'rotate(0deg)' },
            { transform: 'rotate(360deg)' }
        ],
        timing: {
            duration: 35000, // Run for 1000ms
            iterations: Infinity, // Repeat once
            easing: "linear", // Use a fancy timing function
        }
    })


    return (

        <div className="sky" style={{background: isDay? 'lightblue' : 'grey'}}>

            <img alt="" className="sun" width="45" ref={ref}
                src={isDay ? sun : moon} />

            <Bird />
            <Cloud />

        </div>

    );
}

export default Sky;
