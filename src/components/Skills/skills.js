
import React, { useEffect, useState } from 'react';
import './skills.css';
import { client, urlFor } from '../../sanity/client';
import groq from 'groq';
import html from '../../assets/html5.png'; 
import css from '../../assets/css3.png';
import js from '../../assets/javascript.png';
import react from '../../assets/react.png';
import cpp from '../../assets/cpp.png';
import python from '../../assets/python.png';
import github from '../../assets/github.png';
import vscode from '../../assets/vscode.png';

import {
    FaJava
} from "react-icons/fa";

const defaultIcons = {
  HTML: html,
  CSS: css,
  JavaScript: js,
  React: react,
  "C++": cpp,
  Python: python,
  GitHub: github,
  "VS Code": vscode,
};

const Skills = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    client.fetch(
      groq`*[_type=="skillCategory"] | order(order asc){
        title,
        order,
        skills[]{
          name,
          icon
        }
      }`
    ).then((data) => {
      setCategories(data);
    });
  }, []);

  return (
    <section id="skills" className="skills-section">
    <span className="skillTitle">My Skills</span>
    <span className="skillDesc">Tools I use to bring ideas to life — from writing code to crafting user interfaces.</span>
    <div className="skillsSet">
      {categories.map((category, index) => (
        <div className="skills-box" key={index}>
          <h2>{category.title}</h2>

          <div className="skills-list">
            {category.skills?.map((skill, i) => (
              <div className="skill-item" key={i}>

                {skill.name === "Java" ? (
                  <FaJava className="skillIcon java" />
                ) : (
                  <img
                    src={
                      skill.icon
                        ? urlFor(skill.icon).width(50).url()
                        : defaultIcons[skill.name]
                    }
                    alt={skill.name}
                  />
                )}

                {skill.name}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>

    </section>
  );
};

export default Skills;
