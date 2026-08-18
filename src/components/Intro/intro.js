import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import { Typewriter } from "react-simple-typewriter";
import { FaDownload } from "react-icons/fa";

import { useEffect, useState } from "react";
import { client } from "../../sanity/client";
import groq from "groq";

const Intro = () => {
    const [resumeUrl, setResumeUrl] = useState("");
    const [resumeDate, setResumeDate] = useState("");

    useEffect(() => {
        client.fetch(
            groq`*[_type=="resume"][0]{
            "fileUrl": resumeFile.asset->url,
            updatedAt
            }`
        ).then((data) => {
            if (data) {
            setResumeUrl(data.fileUrl);

            if (data.updatedAt) {
                const formattedDate = new Date(data.updatedAt).toLocaleDateString(
                "en-IN",
                {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                }
                );

                setResumeDate(formattedDate);
            }
            }
        });
        }, []);
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

            <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                <button className="btn">    <FaDownload />
                    <div className="resume-btn-text">
      <span>Download Resume</span>

      {resumeDate && (
        <small>Updated {resumeDate}</small>
      )}
    </div>
                </button>
            </a>
            </div>

            <img src={bg} alt="Profile" className="bg" />
        </div>
        </section>

    );
};

export default Intro;
