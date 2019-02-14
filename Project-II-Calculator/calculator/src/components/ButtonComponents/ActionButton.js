import React from 'react';
import './Button.css';

const ActionButton = props => {
    return (
        <div className="ActionButton">
            <div className={props.buttonStyles}>{props.action}</div>
        </div>
        
     );
} 

export default ActionButton;