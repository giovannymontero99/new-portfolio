import React from 'react';
import './About.css';
import useIntersection from '../../hooks/useIntersection';
import logo from '/logo.svg';

const About = () => {
  const [isIntersected, aboutRef] = useIntersection();

  return (
    <section id="about">
      <div
        className={isIntersected ? 'about isIntersected' : 'about'}
        ref={aboutRef}
      >
        <h3>About</h3>
        <div className="about-section">
          <div className="about-text">
            <p>
              Soy Giovanny Andres Montero Carvajal, nací en la ciudad de Bogotá,
              y actualmente vivo en la ciudad de Manizales, Colombia.
              <br />
              <br />
              Soy desarrollador web desde el año 2020 de manera autodidacta y
              actualmente estoy estudiando una tecnología en Análisis y
              Desarrollo de Sistemas de Información (SENA).
            </p>
          </div>
          <div className="about-img">
            <img src={logo} alt="logo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
