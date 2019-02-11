import React from 'react';
import './Footer.css';
import FooterComment from './FooterComment';
import FooterLike from './FooterLike';
import FooterRetweet from './FooterRetweet';
import FooterShare from './FooterShare';

function Footer() {
    return (
        <div className="Footer">
            <div className="interaction-bar">
                <FooterComment />
                <FooterRetweet />
                <FooterLike />
                <FooterShare />
            </div>
        </div>
        
    )
}

export default Footer;