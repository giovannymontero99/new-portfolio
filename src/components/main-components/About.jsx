import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <h3>About</h3>
      <div className="about-section">
        <div>
          <p>
            Soy Giovanny Andres Montero Carvajal, nací en la ciudad de Bogotá, y
            actualmente vivo en la ciudad de Manizales, Colombia.
            <br />
            <br />
            Soy desarrollador web desde el año 2020 de manera autodidacta y
            actualmente estoy estudiando una tecnología en Análisis y Desarrollo
            de Sistemas de Información (SENA).
          </p>
        </div>
        <div>
          <img src="./logo.png" alt="logo" />
        </div>
      </div>
    </section>
  );
};

export default About;
