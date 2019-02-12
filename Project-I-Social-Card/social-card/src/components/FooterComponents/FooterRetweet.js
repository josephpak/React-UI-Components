import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function FooterRetweet() {
    return (
        <div className="interaction">
            <FontAwesomeIcon
            className="retweet"
            icon="retweet"
            />
        </div>
    )
}

export default FooterRetweet;