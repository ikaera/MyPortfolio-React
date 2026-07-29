import React from 'react';
import './Home.css';
import myphoto from './../../assets/passport.jpg';

export default function Home({ setCurrentPage }) {
  return (
    <section className="hero">
      <div className="hero__inner">
        <div className="hero__photo">
          <img src={myphoto} alt="Irakli Eradze" className="hero__img" />
        </div>

        <div className="hero__content">
          <p className="hero__eyebrow">Hello, I'm</p>
          <h1 className="hero__name">Irakli (Ike) Eradze</h1>
          <p className="hero__tagline">Data Science &amp; Software Engineering</p>

          <p className="hero__intro">
            Analytical and motivated M.S. in Engineering, Data Science student
            at the University of Pennsylvania, with a background in computer
            science and economics. I transform raw data into actionable insights
            using Python, SQL, and Excel — and I'm seeking data science and
            software engineering opportunities to contribute to impactful
            projects while continuing to build technical expertise.
          </p>

          <div className="hero__actions">
            <button
              className="hero__btn hero__btn--primary"
              onClick={() => setCurrentPage('Project')}
            >
              View Projects
            </button>
            <button
              className="hero__btn"
              onClick={() => setCurrentPage('Contact')}
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
