import React from 'react';
import './education.css';

import collegeIcon from '../../assets/arya.jpeg'; 
import schoolIcon from '../../assets/schools.png';


const educationData = [
  {
    degree: 'Bachelor of Technology in Computer Science – B.Tech',
    institution: 'Arya College of Engineering and IT, Jaipur || Rajasthan Technical University, Kota',
    duration: 'Sept 2022 – May 2026',
    grade: '8.42 CGPA',
    description:
    'Completed my Bachelor of Technology in Computer Science with a CGPA of 8.42. Built a strong foundation in Data Structures, Object-Oriented Programming, DBMS, Operating Systems, and Web Development while actively participating in technical projects and internships.',
    logo: collegeIcon,
  },
  {
    degree: 'Senior Secondary (Class 12th) – CBSE',
    institution: 'Emmanuel Sr. Sec. School, Bundi',
    duration: 'April 2020 – July 2021',
    grade: '75.8%',
    description:
      'Completed my Class 12th from Emmanuel Sr. Sec. School under CBSE board with a focus on Physics, Chemistry, and Mathematics.',
    logo: schoolIcon,
  },
  {
    degree: 'Secondary (Class 10th) – CBSE',
    institution: 'Emmanuel Sr. Sec. Shool, Bundi',
    duration: 'April 2018 – May 2019',
    grade: '86.4%',
    description:
      'Completed my  Class 10th from Emmanuel Sr. Sec. School under CBSE board and secured 86.4%.',
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
