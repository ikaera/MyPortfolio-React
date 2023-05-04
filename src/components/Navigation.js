import React, { useState } from 'react';
import './Navigation.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import myphoto from '../assets/passport.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faGithub,
  faYoutube,
  faSkype,
} from '@fortawesome/free-brands-svg-icons';
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
  faBars,
  faClose,
  faDownload,
} from '@fortawesome/free-solid-svg-icons';
import resumePDF from '../assets/Resume-Irakli-E.pdf';
// const PDF_Resume =
//   'https://docs.google.com/document/d/1677J2jOdyiuQ-0EPw6GkmcUUQn2_Ep26BrRXIZv2amk/edit#heading=h.ptzf6k1s5l03';

function Navigation() {
  const downloadFile = url => {};
  return (
    <>
      {/* <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid"> */}
      <div className="nav-div" id="navbarSupportedContent">
        {/* <h1> Navigation </h1> */}
        <ul className="nav nav-tabs nav-ul">
          <li className="nav-item">
            <a
              className="nav-link"
              // className="nav-link active"
              aria-current="page"
              href="/"
              // onClick={() => setCurrentPage('Home')}
            >
              <div>
                <FontAwesomeIcon
                  icon={faHome}
                  color="#6d6d6e"
                  className="anchor-icon"
                />
              </div>
              <p className="nav-text">Home</p>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="/about"
              // onClick={() => setCurrentPage('About')}
            >
              <div>
                <FontAwesomeIcon
                  icon={faUser}
                  color="#6d6d6e"
                  className="anchor-icon"
                />
              </div>
              <p className="nav-text"> About</p>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="/project"
              // onClick={() => setCurrentPage('Project')}
            >
              <div>
                <FontAwesomeIcon
                  icon={faSuitcase}
                  color="#6d6d6e"
                  className="anchor-icon"
                />
              </div>
              <p className="nav-text">Project</p>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="/contact"
              // onClick={() => setCurrentPage('Contact')}
            >
              <div>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  color="#6d6d6e"
                  className="anchor-icon"
                />
              </div>
              <p className="nav-text"> Contact </p>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href={resumePDF}
              download="IrakliEradze.PDF"
            >
              <div>
                <FontAwesomeIcon
                  icon={faDownload}
                  color="#6d6d6e"
                  className="anchor-icon"
                />
              </div>
              <p className="nav-text">Resume </p>
              {/* &#xF30A */}
            </a>
          </li>
        </ul>
      </div>
      {/* </div>
      </nav> */}
    </>
  );
}

export default Navigation;
