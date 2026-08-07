import React, { useState } from 'react';
import './projects.css';
import { FaExternalLinkAlt, FaGithub, FaTimes } from 'react-icons/fa';

import portfolioWebsiteImg from '../../assets/portfolio1.png';
import MovieVerseImg from '../../assets/portfolio2.png';
import VoyageAdventuresImg from '../../assets/portfolio3.png';
// import musicAppImg from '../../assets/music-app.png';

const projectList = [
  {
    title: 'Portfolio Website',
    image: portfolioWebsiteImg,
    description: 'A personal portfolio website built using React.js to showcase my projects, skills, education, and professional experience. The site features a responsive layout, dynamic project modals, designed to provide a clear and interactive overview of my frontend development expertise, the portfolio emphasizes UI/UX aesthetics, accessibility, and modern web practices.',
    tech: ['HTML', 'CSS', 'JavaScript', 'React'],
    liveLink: 'https://sanskrati-jain-portfolio-website.vercel.app/',
    codeLink: 'https://github.com/sanskrati0613/portfolioWebsite.git',
  },
    {
    title: 'Voyage Adventures',
    image: VoyageAdventuresImg,
    description: "Developed a responsive travel booking website using React.js with destination browsing, booking interface, reviews, and dynamic routing for a seamless user experience.",
    tech: ['HTML', 'CSS', 'JavaScript', 'React'],
    liveLink: "https://voyage-adventures.vercel.app/",
    codeLink: "https://github.com/sanskrati0613/VoyageAdventures",
  },
    {
    title: 'MovieVerse',
    image: MovieVerseImg,
    description: ' MovieVerse is a responsive React-based web app to discover movies and TV shows using the TMDB API, featuring search, trending content, and a personalized watchlist.',
    tech: ['HTML', 'CSS', 'JavaScript', 'React'],
    liveLink: "https://movie-verse-sable.vercel.app/",
    codeLink: "https://github.com/sanskrati0613/MovieVerse",
  },
  // {
  //   title: 'Music Search App',
  //   image: musicAppImg,
  //   description: 'A web app that allows users to search for music, play samples, and create playlists using the Spotify API.',
  //   tech: ['React', 'Bootstrap', 'Spotify API'],
  //   liveLink: 'https://your-music-app.netlify.app/',
  //   codeLink: 'https://github.com/yourusername/music-app',
  // }
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects">
      <h2 className="projects-title">My Projects</h2>
      <p className="projects-subtitle">A selection of web development projects I’ve built with various technologies.</p>
      <div className="projects-container">
        {projectList.map((project, index) => (
          <div className="project-card" key={index} onClick={() => setActiveProject(project)}>
            <img src={project.image} alt={`${project.title} Screenshot`} className="project-img" />
            <h3>{project.title}</h3>
            <p className="project-desc">{project.description}</p>
          </div>
        ))}
      </div>

      {activeProject && (
        <div className="project-modal">
          <div className="modal-content">
            <button className="close-btn" onClick={() => setActiveProject(null)}><FaTimes /></button>
            <img src={activeProject.image} alt="Project Full" className="modal-img" />
            <h2>{activeProject.title}</h2>
            <p>{activeProject.description}</p>
              <div className="project-tech">
                {activeProject.tech.map((t, i) => (
                  <span key={i} className="tech-tag">{t}</span>
                ))}
              </div>

            <div className="modal-links">
              {activeProject.liveLink && (
                <a href={activeProject.liveLink} target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt /> Live Demo</a>
              )}
              <a href={activeProject.codeLink} target="_blank" rel="noopener noreferrer"><FaGithub /> GitHub</a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
