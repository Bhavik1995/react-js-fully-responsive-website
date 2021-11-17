import React from 'react';
import possiblityImage from '../../assets/possibility.png';
import './possiblity.css';

const Possiblity = () => {
    return (
        <div className="gpt3__possiblity section__paddding" id="possiblity">
                <div className="gpt3__possiblity-image">
                    <img src={possiblityImage} alt={possiblityImage}/>
                </div>

                <div className="gpt3__possiblity-content">
                    <h4>Request Early Access to Get Started</h4>

                    <h1 className="gradient__text">The possibilities are <br /> beyond your imagination.</h1>
                    <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                    <h4>Request Early Access to Get Started</h4>
                </div>
        </div>
    )
}

export default Possiblity