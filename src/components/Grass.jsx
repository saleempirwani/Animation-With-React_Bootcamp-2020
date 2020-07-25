import React from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";

import dog from '../image/dog.gif'
import house from '../image/house.png'
import man from '../image/man.gif'

function Grass({ isDay }) {

    const { ref } = useWebAnimations({

        keyframes: [
            { transform: "translateX(0)" },
            { transform: "translateX(-900px)" }
        ],
        timing: {
            duration: 35000, // Run for 1000ms
            iterations: Infinity, // Repeat once
            easing: "linear", // Use a fancy timing function
        }
    })


    return (

        <div className="grass" style={{ background: isDay ? '#61C235' : 'green' }}>
            <div>
                <img alt="" src={house} width="180" />
                <img alt="" src={man} className="man" width="100" />
            </div>

            <img alt="" src={dog} className="dog" ref={ref} />
        </div>
    );
}

export default Grass;


