import React from 'react';
import './education.css';

import collegeIcon from '../../assets/arya.jpeg';   // Add appropriate icon files
import schoolIcon from '../../assets/schools.png';
import boardIcon from '../../assets/board.png';


const educationData = [
  {
    degree: 'Bachelor of Technology in Computer Science – B.Tech',
    institution: 'Arya College of Engineering and IT, Jaipur',
    duration: 'Sept 2022 – May 2026',
    grade: '8.27 CGPA',
    description:
      'I am pursuing a Bachelor of Technology (B.Tech) in Computer Science at Arya College of Engineering & IT, Jaipur. My academic journey emphasizes key areas like Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems (DBMS), Operating Systems, Software Engineering, and Web Development. I consistently engage in technical fests, collaborative projects, and certification programs to strengthen my problem-solving abilities and gain hands-on experience with modern development tools and frameworks.',
    logo: collegeIcon,
  },
  {
    degree: 'Senior Secondary (Class 12th) – CBSE',
    institution: 'Emmanuel Sr. Sec. Shool, Bundi',
    duration: 'April 2020 – July 2021',
    grade: '76%',
    description:
      'Completed my Class 12th from Emmanuel Sr. Sec. School under CBSE board with a focus on Physics, Chemistry, and Mathematics.',
    logo: schoolIcon,
  },
  {
    degree: 'Secondary (Class 10th) – CBSE',
    institution: 'Emmanuel Sr. Sec. Shool, Bundi',
    duration: 'April 2018 – May 2019',
    grade: '87%',
    description:
      'Completed my  Class 10th from Emmanuel Sr. Sec. School under CBSE board and secured 87%.',
    logo: schoolIcon,
  }
];

const Education = () => {
  return (
    <section id="education">
      <h2 className="edu-title">Education</h2>
      <p className="edu-subtitle">My academic background and qualifications that shaped my technical foundation.</p>
      <div className="edu-timeline">
        {educationData.map((edu, index) => (
          <div className="edu-card" key={index}>
            <div className="edu-header">
              <img src={edu.logo} alt="Institution logo" className="edu-logo" />
              <div>
                <h3>{edu.degree}</h3>
                <p className="edu-institution">{edu.institution}</p>
                <p className="edu-duration">{edu.duration}</p>
              </div>
            </div>
            <p className="edu-grade"><strong>Grade:</strong> {edu.grade}</p>
            <p className="edu-description">{edu.description}</p>
            {index < educationData.length - 1 && <div className="edu-line"></div>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
