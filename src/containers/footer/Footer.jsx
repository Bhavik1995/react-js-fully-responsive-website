import React from 'react';
import gpt3Logo from '../../assets/logo.svg';
import './footer.css';

const Footer = () => {
    return (
        <div className="gpt3__footer section__padding">
        <div className="gpt3__footer-heading">
          <h1 className="gradient__text">Do you want to step in to the future before others</h1>
        </div>
    
        <div className="gpt3__footer-btn">
          <p>Request Early Access</p>
        </div>
    
        <div className="gpt3__footer-links">
          <div className="gpt3__footer-links_logo">
            <img src={gpt3Logo} alt="gpt3_logo" />
            <p>Bhavik Sejpal, <br /> All Rights Reserved</p>
          </div>
          <div className="gpt3__footer-links_div">
            <h4>Links</h4>
            <p>Overons</p>
            <p>Social Media</p>
            <p>Counters</p>
            <p>Contact</p>
          </div>
          <div className="gpt3__footer-links_div">
            <h4>Company</h4>
            <p>Terms & Conditions </p>
            <p>Privacy Policy</p>
            <p>Contact</p>
          </div>
          <div className="gpt3__footer-links_div">
            <h4>Get in touch</h4>
            <p>Nevsky Ave, 47, 3 Etazh, St Petersburg, Russia, 191025</p>
            <p>7 812 703-53-71</p>
            {/* <p>http://www.palkin.ru/</p> */}
          </div>
        </div>
    
        <div className="gpt3__footer-copyright">
          <p>@2021 Bhavik Sejpal. All rights reserved.</p>
        </div>
      </div>
    )
}

export default Footer