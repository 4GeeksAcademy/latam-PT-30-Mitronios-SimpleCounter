//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/Home.jsx";

//render your react application
import { SimpleCounter } from "./component/SimpleCounter.jsx";

let counter = 0;
setInterval(() => {
    const counterArray = `${counter}`.split("").reverse()
    const numbOne = counterArray[0]
    const numbTwo = counterArray[1] ? counterArray[1] : 0
    const numbThree = counterArray[2] ? counterArray[2] : 0
    const numbFour = counterArray[3] ? counterArray[3] : 0
    const numbFive = counterArray[4] ? counterArray[4] : 0
    const numbSix = counterArray[5] ? counterArray[5] : 0

    ReactDOM.render(<SimpleCounter
        digit1={numbOne}
        digit2={numbTwo}
        digit3={numbThree}
        digit4={numbFour}
        digit5={numbFive}
        digit6={numbSix} />, document.querySelector("#app"));
    counter++
}, 1000);

