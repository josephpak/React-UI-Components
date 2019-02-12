import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function FooterLike() {

    let count = 1;

    let handleChange = () => {
        count++
    }

    return (
        <div className="interaction-like">
            <FontAwesomeIcon
            className="heart"
            icon="heart"
            onClick={handleChange}
            />
            <p>{count}</p>  
        </div>         
    )
}

export default FooterLike;