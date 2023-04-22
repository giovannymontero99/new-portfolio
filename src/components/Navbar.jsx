import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <section className="menuSection">
      <div className="menuSection__navBar">
        <ul className="menu__ul">
          <li className="logo">GAMC</li>
          <li className="munu__li">
            <a href="#home">Home</a>
          </li>
          <li className="munu__li">
            <a href="#about">About</a>
          </li>
          <li className="munu__li">
            <a href="#projects">Projects</a>
          </li>
          <li className="munu__li">
            <a href="#podcast">Podcast</a>
          </li>
          <li className="lettersSection">Stay in touch</li>
          <li className="munu__li">
            <a href="#contact">Contact</a>
          </li>
          <li className="munu__li">
            <a href="#twiter">Twiter</a>
          </li>
        </ul>
        <div className="buttonsSection">
          <div className="buttonSelected">Ligth</div>
          <div className="buttonSelected">Dark</div>
          <div className="buttonSelected">Auto</div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
