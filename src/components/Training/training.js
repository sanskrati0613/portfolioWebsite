import React from 'react';
import './training.css';
import salesforceLogo from '../../assets/salesforce.png';
import redhatLogo from '../../assets/redhat.png';

const trainingData = [
  // {
  //   title: 'Celebal Summer Internship',
  //   organization: 'Celebal Technologies',
  //   date: '5 July 2024 to 2 September 2024',
  //   description: 'This training on Salesforce fundamentals, where I gained hands-on experience with basic user management , Created reports and dashboard in Salesforce to monitor key metrics and decision making efficiency.',
  //   logo: salesforceLogo
  // },
  {
    title: 'Fundamentals of Salesforce & Internship',
    organization: 'TechForce Academy',
    date: '5 July 2024 to 2 September 2024',
    description: 'This training on Salesforce fundamentals, where I gained hands-on experience with basic user management , Created reports and dashboard in Salesforce to monitor key metrics and decision making efficiency.',
    logo: salesforceLogo
  },
  {
    title: 'Red Hat Certified System Administrator',
    organization: 'Red Hat',
    date: 'Feb 2024 - April 2024',
    description: 'Training and certification under Red Hat, gaining expertise in Linux system administration. Equipped with skills required for managing and configuring Red Hat Enterprise Linux environments.',
    logo: redhatLogo
  }
];

const Training = () => {
  return (
    <section id="training">
      <h2 className="training-title">Training</h2>
      <p className='training-subtitle'>My journey through industry-led training programs and internship experiences.</p>
      <div className="timeline">
        {trainingData.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-content">
              <img src={item.logo} alt={item.organization} className="training-logo" />
              <h3>{item.title}</h3>
              <h4>{item.organization}</h4>
              <span className="training-date">{item.date}</span>
              <p>{item.description}</p>
            </div>
            {index !== trainingData.length - 1 && <div className="timeline-line"></div>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Training;
