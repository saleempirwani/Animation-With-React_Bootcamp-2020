import React from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";

import car from '../image/car.gif'
import cycle from '../image/cycling.gif'

const Cycle = () => {

    const { ref } = useWebAnimations({

        keyframes: [
            { transform: "translateX(0)" },
            { transform: "translateX(1100px)" }
        ],
        timing: {
            duration: 15000, // Run for 1000ms
            iterations: Infinity, // Repeat once
            easing: "linear", // Use a fancy timing function
        }
    })

    return (
        <div className="cycle" ref={ref}><img alt="" src={cycle} width="100" /></div>
    )
}

const Car = () => {

    const { ref } = useWebAnimations({

        keyframes: [
            { transform: "translateX(0)" },
            { transform: "translateX(1100px)" }
        ],
        timing: {
            duration: 9000, // Run for 1000ms
            iterations: Infinity, // Repeat once
            easing: "linear", // Use a fancy timing function
        }
    })

    return (
        <div className="car" ref={ref}><img alt="" src={car} width="180" /></div>
    )
}

function Bird() {

    return (
        <div className="road">
            <div className="line">
                <Car />
                <Cycle />
            </div>
        </div>
    );
}

export default Bird;

