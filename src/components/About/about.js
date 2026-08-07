import React from 'react';
import './about.css';
import { FaLaptopCode } from "react-icons/fa";
import { MdOutlineDevices } from "react-icons/md";

const About = () => {
    return (
        <section id='about'>
            <span className="aboutTitle">What I do</span>
            <span className="aboutDesc">I'm a Computer Science graduate and aspiring Front-End Developer passionate about building responsive and user-friendly web applications using HTML, CSS, JavaScript, and React. I enjoy transforming ideas into clean, modern interfaces while continuously improving my programming and problem-solving skills.</span>
            <div className="aboutBars">
                <div className="aboutBar">
                    <FaLaptopCode className="aboutBarIcon" />
                    <div className="aboutBarText">
                        <h2>Frontend Development</h2>
                        <p>I develop responsive and interactive web applications using HTML, CSS, JavaScript, and React while focusing on performance and user internerience.</p>
                    </div>
                </div>
                <div className="aboutBar">
                    <MdOutlineDevices className="aboutBarIcon" />
                    <div className="aboutBarText">
                        <h2>Responsive Web Design</h2>
                        <p>I build modern, mobile-friendly websites that work seamlessly across desktops, tablets, and smartphones.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;