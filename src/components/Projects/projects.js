import React, { useEffect, useState } from 'react';
import './projects.css';
import { FaExternalLinkAlt, FaGithub, FaTimes } from 'react-icons/fa';

import { client, urlFor } from '../../sanity/client';
import groq from 'groq';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [activeProject, setActiveProject] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    client
      .fetch(
        groq`*[_type=="project"] | order(order asc){
          title,
          category,
          description,
          image,
          tech,
          github,
          live
        }`
      )
      .then((data) => {
        const formatted = data.map((project) => ({
          title: project.title,
          category: project.category,
          description: project.description,
          image: urlFor(project.image).url(),
          tech: project.tech || [],
          liveLink: project.live,
          codeLink: project.github,
        }));

        setProjects(formatted);
      });
  }, []);

  const categories = [
  "All",
  ...new Set(projects.map((p) => p.category)),
];

const filteredProjects =
  selectedCategory === "All"
    ? projects
    : projects.filter(
        (project) => project.category === selectedCategory
      );

  return (
    <section id="projects">
      <h2 className="projects-title">My Projects</h2>
      <p className="projects-subtitle">A selection of web development projects I’ve built with various technologies.</p>
      <div className="project-filters">
  {categories.map((category) => (
    <button
      key={category}
      className={`filter-btn ${
        selectedCategory === category ? "active-filter" : ""
      }`}
      onClick={() => setSelectedCategory(category)}
    >
      {category === "All"
        ? "All"
        : category === "ai"
        ? "AI / ML"
        : category.charAt(0).toUpperCase() + category.slice(1)}
    </button>
  ))}
</div>
      <div className="projects-container">
        {filteredProjects.map((project, index) => (
          <div className="project-card" key={index} onClick={() => setActiveProject(project)}>
            <img src={project.image} alt={`${project.title} Screenshot`} className="project-img" />
            <div className="project-header">
              <span className="project-category">
                {project.category === "ai"
                  ? "AI / ML"
                  : project.category.charAt(0).toUpperCase() + project.category.slice(1)}
              </span>

              <h3>{project.title}</h3>
            </div>
            <p className="project-desc">{project.description}</p>
          </div>
        ))}
      </div>

      {activeProject && (
        <div className="project-modal">
          <div className="modal-content">
            <button className="close-btn" onClick={() => setActiveProject(null)}><FaTimes /></button>
            <img src={activeProject.image} alt="Project Full" className="modal-img" />
            <div className="modal-title">
              <span className="project-category">
                {activeProject.category === "ai"
                  ? "AI / ML"
                  : activeProject.category.charAt(0).toUpperCase() +
                    activeProject.category.slice(1)}
              </span>

              <h2>{activeProject.title}</h2>
            </div>
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
