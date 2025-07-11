
// import React from 'react';
// import './certifications.css';
// import salesforceLogo from '../../assets/salesforce.png';
// import redhatLogo from '../../assets/redhat.png';
// import mongoLogo from '../../assets/mongodb.png';

// const certifications = [
//   {
//     title: 'Salesforce Fundamentals & Internship',
//     platform: 'Salesforce',
//     date: 'August 2024',
//     logo: salesforceLogo,
//     downloadLink: '/Certificates/salesfore.pdf',
//     verifyLink: 'https://credly.com/your-salesforce-badge-link'
//   },
//   {
//     title: 'Red Hat Certified System Administrator',
//     platform: 'Red Hat',
//     date: 'April 2024',
//     logo: redhatLogo,
//     downloadLink: '/certificates/redhat-certification.pdf',
//     verifyLink: 'https://credly.com/your-redhat-badge-link'
//   },
//   {
//     title: 'MongoDB Basics for Students',
//     platform: 'MongoDB',
//     date: 'June 2024',
//     logo: mongoLogo,
//     downloadLink: '/certificates/mongodb-basics.pdf',
//     verifyLink: 'https://learn.mongodb.com/your-badge-link'
//   }
// ];

// const Certifications = () => {
//   return (
//     <section id="certifications">
//       <h2 className="cert-title">Certifications</h2>
//       <p className='cert-subtitle'>Certifications and real-world experiences that enhanced my technical and professional growth.</p>
//       <div className="cert-list">
//         {certifications.map((cert, index) => (
//      <div className="cert-card" key={index}>
//   <img src={cert.logo} alt={`${cert.platform} logo`} className="cert-logo" />
//   <h3>{cert.title}</h3>
//   <p><strong>{cert.platform}</strong> — {cert.date}</p>
//   <div className="cert-buttons">
//     <a href={cert.downloadLink} download target="_blank" rel="noopener noreferrer" className="cert-btn">Download</a>
//     <a href={cert.verifyLink} target="_blank" rel="noopener noreferrer" className="cert-btn">Verify</a>
//   </div>
// </div>

//         ))}
//       </div>
//     </section>
//   );
// };

// export default Certifications;
