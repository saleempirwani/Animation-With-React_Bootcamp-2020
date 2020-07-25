import React from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";

import cloud from '../image/cloud.png'

function Cloud() {

    const { ref } = useWebAnimations({

        keyframes: [
            { transform: "translateX(0)" },
            { transform: "translateX(-1100px)" }
        ],
        timing: {
            duration: 50000, // Run for 1000ms
            iterations: Infinity, // Repeat once
            easing: "linear", // Use a fancy timing function
        }
    })


    return (
        <div className="cloud" ref={ref}>
          <img alt="" src={cloud} width="30" />
          <img alt="" src={cloud} width="100" />
          <img alt="" src={cloud} width="70" />
        </div>
    );
}

export default Cloud;
