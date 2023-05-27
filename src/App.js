import './App.css';
import { Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/pages/Project';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';

import Navigation from './components/Navigation';

import React, { useState } from 'react';

function App() {
  // const [currentPage, setCurrentPage] = useState('Home');
  // function displayPage() {
  //   if (currentPage === 'Home') {
  //     return <Home />;
  //   }
  //   if (currentPage === 'About') {
  //     return <About />;
  //   }
  //   if (currentPage === 'Project') {
  //     return <Project />;
  //   }
  //   return <Contact />;
  // }

  return (
    <div className="page">
      {/* Wrap page elements in Router component to keep track of location state */}

      {/* <h1>Irakli Eradze</h1> */}

      <Navigation /* setCurrentPage={setCurrentPage}*/ />
      {/* // {displayPage()} */}
      {/* <Home setCurrentPage={setCurrentPage} /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
