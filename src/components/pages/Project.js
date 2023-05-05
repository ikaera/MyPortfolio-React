import React, { useState } from 'react';
// import classes from './Project.module.css';
import './Project.css';
import img1 from '../../assets/Booze-Hound.jpg';
import img2 from '../../assets/P2P Vinyl & CD Resale/discexchange favorited items.png';
import techBlog from '../../assets/img-project/Tech-Blog-IE-14.png';
import codeQuiz from '../../assets/img-project/codeQ.png';
import weatherDashboard from '../../assets/img-project/weatherDashboard.png';
import noteTaker from '../../assets/img-project/NoteTaker.png';
import textEditor from '../../assets/img-project/Text-Editor.png';
import passwordGen from '../../assets/img-project/passwordG.png';
import MyPortfolioReact from '../../assets/img-project/MyPortfolioReact.png';

function Project(props) {
  const projects = [
    {
      title: 'Booze-Hound',
      image: img1,
      gitHub: 'https://github.com/Jsrra/Booze-Hound',
      diployedApp: 'https://jsrra.github.io/Booze-Hound/',
      describtion: 'API, ',
    },
    {
      title: 'P2P Vinyl & CD Resale',
      image: img2,
      gitHub: 'https://github.com/ikaera/Project-2',
      diployedApp: 'https://serene-forest-09402.herokuapp.com/',
      describtion: '',
    },
    {
      title: 'Tech-Blog',
      image: techBlog,
      gitHub: 'https://github.com/ikaera/Tech-Blog-IE-14',
      diployedApp: 'https://secure-tor-51469.herokuapp.com/',
      describtion: ' ',
    },
    {
      title: 'Code-Quiz',
      image: codeQuiz,
      gitHub: 'https://github.com/ikaera/Code-Quiz-WebDiv-IE',
      diployedApp: 'https://ikaera.github.io/Code-Quiz-WebDiv-IE/',
      describtion: 'JS, DOM, CSS, HTML ',
    },
    {
      title: 'Weather Dashboard',
      image: weatherDashboard,
      gitHub:
        'https://github.com/ikaera/Mod6-Server-Side-APIs-Challenge-WeatherDashboard',
      diployedApp:
        'https://ikaera.github.io/Mod6-Server-Side-APIs-Challenge-WeatherDashboard/',
      describtion: 'API, ',
    },
    {
      title: 'My-Note-Taker',
      image: noteTaker,
      gitHub: 'https://github.com/ikaera/My-Note-Taker',
      diployedApp: 'https://fierce-thicket-04291.herokuapp.com/',
      describtion:
        'Express.js, Node.js, JavaScript, Path module, UUID module, ',
    },
    {
      title: 'My Portfolio in React',
      image: MyPortfolioReact,
      gitHub: 'https://github.com/ikaera/MyPortfolio-React',
      diployedApp: 'https://ikaera.github.io/MyPortfolio-React/',
      describtion: 'Node.js, React',
    },
    {
      title: 'Password Generator',
      image: passwordGen,
      gitHub: 'https://github.com/ikaera/Password-Generator-IE',
      diployedApp: 'https://ikaera.github.io/Password-Generator-IE/',
      describtion: 'JS, DOM',
    },
  ];
  return (
    <div className="projects">
      <h1 className="projects-heading"> Projects </h1>
      <div className="project-cards">
        {projects.map(project => (
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
