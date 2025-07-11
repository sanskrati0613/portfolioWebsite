import React from 'react';
import './about.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';

const About = () => {
    return (
        <section id='about'>
            <span className="aboutTitle">What I do</span>
            <span className="aboutDesc">I am a skilled and passionate Front-End developer with experience in creating visually appealing and user-friendly websites. I have a strong understanding of design and a keen eye for detail. I am proficient in HTML, CSS, and JavaScript.</span>
            <div className="aboutBars">
                <div className="aboutBar">
                    <img src={UIDesign} alt="UIDesign" className="aboutBarImg" />
                    <div className="aboutBarText">
                        <h2>UI/UX Design</h2>
                        <p>I design User Interface and take care of User's overall experience with the product is enjoyable.</p>
                    </div>
                </div>
                <div className="aboutBar">
                    <img src={WebDesign} alt="WebDesign" className="aboutBarImg" />
                    <div className="aboutBarText">
                        <h2>Website Design</h2>
                        <p>I design websites that are visually appealing and user-friendly.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;