import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function FooterShare() {
    return (
        <div className="interaction">
            <FontAwesomeIcon
            className="share"
            icon="envelope"
            />
        </div>
        
    )
}

export default FooterShare;