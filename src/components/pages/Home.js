import React, { useState } from 'react';
import './Home.css';
import myphoto from './../../assets/passport.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Home(setCurrentPage) {
  return (
    <div className="hero">
      {/* <h1>Home Page</h1> */}
      <div className="logo-box">
        <img src={myphoto} alt="my-photo" className="logo" />
      </div>
      <div className="text-box">
        <h1 className="heading-primary">
          Hello, this is
          <span className="heading-primary-main"> Irakli Eradze </span>
          <a
            className="heading-primary-sub"
            // href="#Portfolio"
            // onClick={() => setCurrentPage('Project')}
          >     Web Developer 
          </a>
          {/* <a
              className="nav-link"
              href="#Portfolio"
              onClick={() => setCurrentPage('Project')}
            ></a> */}
        </h1>
      </div>
    </div>
  );
}
