import React from 'react';
import './Button.css';


const NumberButton = props => {
    return (
        <div className={props.buttonStyles}>{props.number}</div>
     );
} 

export default NumberButton;