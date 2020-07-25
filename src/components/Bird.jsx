import React from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";

import bird from '../image/bird.gif'

function Bird() {

    const { ref } = useWebAnimations({

        keyframes: [
            { transform: "translateX(0)" },
            { transform: "translateX(1100px)" }
        ],
        timing: {
            duration: 35000, // Run for 1000ms
            iterations: Infinity, // Repeat once
            easing: "linear", // Use a fancy timing function
        }
    })


    return (
        <div className="bird" ref={ref}>
            <img alt="" src={bird} width="30" />
            <img alt="" src={bird} width="30" />
            <img alt="" src={bird} width="30" />
            <img alt="" src={bird} width="30" />
        </div>
    );
}

export default Bird;
