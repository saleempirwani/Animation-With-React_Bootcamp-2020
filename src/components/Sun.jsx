import React from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";

import sun from '../image/sun.png'
import moon from '../image/moon.png'

function Sky({ isDay, dayHandler }) {

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

        <img alt="" className="sun" width="45" ref={ref}
            src={isDay ? sun : moon}
            onClick={ () => {
                if(isDay) dayHandler(false)
                else dayHandler(true)
            }}
        />
    );
}

export default Sky;
