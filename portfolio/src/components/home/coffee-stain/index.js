import './index.css';
import React, { useRef } from 'react';
import coffeeStain from './coffee_stain.png'



function CoffeeStain() {
    return (
        <img src={coffeeStain} alt="Coffee Stain" className="coffee-stain"/>
    );
}

export default CoffeeStain;