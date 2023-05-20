import React, { useState, useEffect } from 'react';
// import classes from './Project.module.css';
import './Project.css';

import SearchBox from '../SearchBox/SearchBox';

import projects from '../../utils/projectList';

function Project(props) {
  const [searchField, setSearchField] = useState('');

  const onClickChange = event => {
    const btnText = event.target.textContent.toLowerCase();
    if (btnText === 'show all') {
      return setSearchField('');
    }
    setSearchField(btnText);
  };

  const onSearchChange = event => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  const techButtons = ['React', 'Node', 'JavaScript', 'GraphQl', 'Handlebars'];

  const filterBySearch = project => {
    return project.description
      .toLowerCase()
      .includes(searchField.toLowerCase());
  };

  return (
    <div className="projects">
      <h1 className="projects-heading"> Projects </h1>

      <div>
        {techButtons.map(tech => (
          <button className="tech-btn" key={tech} onClick={onClickChange}>
            {tech}
          </button>
        ))}
        <button className="tech-btn" key="show-all" onClick={onClickChange}>
          Show All
        </button>
      </div>

      <div className="search-container">
        <SearchBox
          className="store-search-box"
          onChangeHandler={onSearchChange}
          placeholder="ProjectFinder by Tech 🔍"
          searchField={searchField}
        />
      </div>

      <div className="project-cards">
        {projects.filter(filterBySearch).map(project => (
          <div
            className="project card"
            style={{ width: '60rem' }}
            key={project.title}
          >
            <img
              className="card-img-top"
              src={project.image}
              alt="project"
            ></img>
            <div className="card-body">
              <h3 className="card-title">{project.title}</h3>

              <a className="card-link" href={project.gitHub} target="_blank">
                GitHub
              </a>
              <a
                className="card-link"
                href={project.diployedApp}
                target="_blank"
              >
                Live App
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
