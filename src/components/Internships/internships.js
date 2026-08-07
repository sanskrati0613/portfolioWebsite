import React from 'react';
import './internships.css';

const internerienceData = [
    {
    role: 'Front-End Web Development Intern',
    company: 'IBM SkillsBuild',
    duration: 'August 2025 - September 2025',
    type: 'Internship',
    description:
      'Built responsive web interfaces using HTML, CSS, JavaScript, and React. Applied frontend concepts through hands-on project while improving UI development and collaboration skills.',
    },
    {
    role: 'Data Engineering Intern',
    company: 'Celebal Technologies',
    duration: 'June 2025 – August 2025',
    type: 'Internship',
    description:
      'Worked on data engineering workflows and data processing tasks. Strengthened problem-solving skills while collaborating on real-world industry projects.',
    },
  {
    role: 'Front-End Development Intern',
    company: 'Cognifyz Technologies',
    duration: 'June 2025 – July 2025',
    type: 'Internship',
    description:
      'Developed responsive web pages using HTML, CSS, and JavaScript. Improved UI responsiveness and implemented interactive web components.',
  },
  {
    role: 'Web Development Intern',
    company: 'VanillaKart',
    duration: '2024',
    type: 'Internship',
    description:
      'Worked on frontend development tasks, website improvements, and responsive layouts while gaining practical industry internosure.',
  },
    {
    role: 'Salesforce System Administrator',
    company: 'TechForce Academy',
    duration: 'July 2024 - September 2024',
    type: 'Internship',
    description:
      'Learned Salesforce fundamentals, CRM concepts, Apex basics, and Lightning Platform through guided projects and practical assignments.',
  },
];

const Internships = () => {
  return (
    <section id="internships">
      <h2 className="intern-title">Internships</h2>

      <p className="intern-subtitle">
        My internships and industry experience that strengthened my technical and professional skills.
      </p>

      <div className="intern-timeline">
        {internerienceData.map((intern, index) => (
          <div className="intern-card" key={index}>

            <div className="intern-header">

              <div className="intern-header-text">
                <h3>{intern.role}</h3>

                <p className="intern-company">{intern.company}</p>

                <p className="intern-duration">{intern.duration}</p>
              </div>

            </div>

            <p className="intern-type">
              <strong>Type:</strong> {intern.type}
            </p>

            <p className="intern-description">
              {intern.description}
            </p>

            {index < internerienceData.length - 1 && (
              <div className="intern-line"></div>
            )}

          </div>
        ))}
      </div>
    </section>
  );
};

export default Internships;