import React from 'react';
import './Button.css';


const NumberButton = props => {
    return (
        <div className="NumberButton">
            <div className={props.buttonStyles}>{props.number}</div>
        </div>
     );
} 

export default NumberButton;