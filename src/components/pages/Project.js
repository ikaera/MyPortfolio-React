import React, { useState } from 'react';
import './Project.css';

import SearchBox from '../SearchBox/SearchBox';

import projects from '../../utils/projectList';

// Split a project's comma-separated description into clean tech tokens.
const techOf = project =>
  project.description
    .split(',')
    .map(t => t.trim())
    .filter(Boolean);

// Filter buttons, ordered to mirror the resume skills (not the raw data).
const techGroups = [
  {
    label: 'Languages',
    items: ['Python', 'SQL', 'Java', 'JavaScript', 'React', 'C/C++'],
  },
  {
    label: 'Databases',
    items: ['MySQL', 'MongoDB', 'NoSQL'],
  },
];

function Project() {
  const [searchField, setSearchField] = useState('');

  const onClickChange = event => {
    const btnText = event.target.textContent.toLowerCase().trim();
    setSearchField(btnText === 'show all' ? '' : btnText);
  };

  const onSearchChange = event => {
    setSearchField(event.target.value.toLowerCase());
  };

  const filterBySearch = project =>
    project.description.toLowerCase().includes(searchField.toLowerCase());

  const filtered = projects.filter(filterBySearch);

  return (
    <div className="projects">
      <h1 className="projects-heading">Projects</h1>

      <div className="tech-filter">
        <button
          className={`tech-btn tech-btn--all${
            searchField === '' ? ' is-active' : ''
          }`}
          key="show-all"
          onClick={onClickChange}
        >
          Show All
        </button>

        {techGroups.map(group => (
          <div className="tech-group" key={group.label}>
            <span className="tech-group__label">{group.label}:</span>
            {group.items.map(tech => (
              <button
                className={`tech-btn${
                  searchField === tech.toLowerCase() ? ' is-active' : ''
                }`}
                key={tech}
                onClick={onClickChange}
              >
                {tech}
              </button>
            ))}
          </div>
        ))}
      </div>

      <div className="search-container">
        <SearchBox
          className="store-search-box"
          onChangeHandler={onSearchChange}
          placeholder="Find a project by tech 🔍"
          searchField={searchField}
        />
      </div>

      <div className="project-cards">
        {filtered.length === 0 && (
          <p className="no-results">No projects match that tech yet.</p>
        )}

        {filtered.map(project => (
          <div className="project-card" key={project.title}>
            <a
              href={project.diployedApp}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__media"
            >
              <img src={project.image} alt={project.title} loading="lazy" />
            </a>

            <div className="project-card__body">
              <h3 className="project-card__title">{project.title}</h3>

              {/* Resume-style tech list, rendered as pills */}
              <ul className="tech-pills">
                {techOf(project).map(tech => (
                  <li className="tech-pill" key={tech}>
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="project-card__links">
                <a
                  className="card-link"
                  href={project.gitHub}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  className="card-link card-link--primary"
                  href={project.diployedApp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
