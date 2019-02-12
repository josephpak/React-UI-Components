import React from 'react';
import './Button.css';

const ActionButton = props => {
    return (
        <div className={props.buttonStyles}>{props.action}</div>
     );
} 

export default ActionButton;