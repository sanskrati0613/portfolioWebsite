import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/download.png';

const Intro = () => {
    return (
        <section id="intro">
        <div className="introWrapper">
            <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">
                I'm <span className="introName">Sanskrati Jain</span> <br />Front-End Developer
            </span>
            <p className="introPara">
                I'm a passionate Front-End designer with an interest in creating
                visually appealing and user-friendly websites.
            </p>

            <a href="/Sanskrati_CV.pdf" download>
                <button className="btn">
                <img src={btnImg} alt="Download" className="btnImg" />
                Download CV
                </button>
            </a>
            </div>

            <img src={bg} alt="Profile" className="bg" />
        </div>
        </section>

    );
};

export default Intro;
