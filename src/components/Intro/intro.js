import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import { Typewriter } from "react-simple-typewriter";
import { FaDownload } from "react-icons/fa";

const Intro = () => {
    return (
        <section id="intro">
        <div className="introWrapper">
            <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">
                I'm <span className="introName">Sanskrati Jain</span> <br />
                <span className="introText">
                <Typewriter
                    words={[
                        "Frontend Developer",
                        "React Developer"
                    ]}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={120}
                    deleteSpeed={90}
                    delaySpeed={1800}
                />
                </span>
            </span>
            <p className="introPara">
                I build responsive and user-friendly web applications using HTML, CSS, JavaScript, and React.<br></br>
                I'm a Computer Science graduate passionate about creating clean, modern interfaces and continuously improving my development skills.<br></br>
                <b>Available for Front-End Developer opportunities</b>
            </p>

            <a href="/Sanskrati_CV.pdf" download>
                <button className="btn">    <FaDownload />
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
