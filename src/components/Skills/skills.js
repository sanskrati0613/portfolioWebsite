
import React from 'react';
import './skills.css';
import html from '../../assets/html5.png'; 
import css from '../../assets/css3.png';
import js from '../../assets/javascript.png';
import react from '../../assets/react.png';
import c from '../../assets/c.png';
import cpp from '../../assets/cpp.png';
import python from '../../assets/python.png';
import github from '../../assets/github.png';
import vscode from '../../assets/vscode.png';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
    <span className="skillTitle">My Skills</span>
    <span className="skillDesc">Tools I use to bring ideas to life — from writing code to crafting user interfaces.</span>
    <div className='skillsSet'>
        <div className="skills-box">
        <h2>Frontend</h2>
        <div className="skills-list">
          <div className="skill-item"><img src={html} alt="HTML" />HTML</div>
          <div className="skill-item"><img src={css} alt="CSS" />CSS</div>
          <div className="skill-item"><img src={js} alt="JavaScript" />JavaScript</div>
          <div className="skill-item"><img src={react} alt="React" />React</div>
        </div>
      </div>

      <div className="skills-box">
        <h2>Languages</h2>
        <div className="skills-list">
          <div className="skill-item"><img src={c} alt="C" />C</div>
          <div className="skill-item"><img src={cpp} alt="C++" />C++</div>
          <div className="skill-item"><img src={python} alt="Python" />Python</div>
          <div className="skill-item"><img src={js} alt="JavaScript" />JavaScript</div>
        </div>
      </div>

      <div className="skills-box">
        <h2>Tools</h2>
        <div className="skills-list">
          <div className="skill-item"><img src={github} alt="GitHub" />GitHub</div>
          <div className="skill-item"><img src={vscode} alt="VS Code" />VS Code</div>
        </div>
      </div>
    </div>

    </section>
  );
};

export default Skills;
