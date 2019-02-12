import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function FooterComment() {
    return (
        <div className="interaction">
            <FontAwesomeIcon
                className="comment"
                icon="comment-alt"
            />
        </div>
        
    )
}

export default FooterComment;