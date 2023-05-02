import React, { useState } from 'react';
import './Navigation.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import resumePDF from '../assets/Resume-Irakli-E.pdf';
const PDF_Resume =
  'https://docs.google.com/document/d/1677J2jOdyiuQ-0EPw6GkmcUUQn2_Ep26BrRXIZv2amk/edit#heading=h.ptzf6k1s5l03';

function Navigation({ setCurrentPage }) {
  const downloadFile = url => {};
  return (
    <>
      {/* <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid"> */}
      <div
        // className="collapse navbar-collapse"
        id="navbarSupportedContent"
      >
        {/* <h1> Navigation </h1> */}
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a
              className="nav-link"
              // className="nav-link active"
              aria-current="page"
              href="#home"
              onClick={() => setCurrentPage('Home')}
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#About"
              onClick={() => setCurrentPage('About')}
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#Portfolio"
              onClick={() => setCurrentPage('Project')}
            >
              Project
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#Contact"
              onClick={() => setCurrentPage('Contact')}
            >
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href={resumePDF}
              download="IrakliEradze.PDF"
            >
              Resume
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
