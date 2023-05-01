import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [btnActive, setBtnActive] = useState(false);

  const handleButton = () => {
    return setBtnActive(!btnActive);
  };

  return (
    <section className="menuSection">
      <div
        onClick={handleButton}
        className={`hamburger hamburger--spring ${
          btnActive ? 'is-active' : ''
        }`}
      >
        <div className="hamburger-box">
          <div className="hamburger-inner"></div>
        </div>
      </div>
      <div
        className={`menuSection__navBar ${
          btnActive ? 'menuSection__navBar-active' : ''
        }`}
      >
        <ul className="menu__ul">
          <li className="logo">GAMC</li>
          <li className="munu__li">
            <a href="#home" onClick={handleButton}>
              Home
            </a>
          </li>
          <li className="munu__li">
            <a href="#about" onClick={handleButton}>
              About
            </a>
          </li>
          <li className="munu__li">
            <a href="#projects" onClick={handleButton}>
              Projects
            </a>
          </li>
          <li className="munu__li">
            <a href="#skills" onClick={handleButton}>
              Skills
            </a>
          </li>
          <li className="lettersSection">Stay in touch</li>
          <li className="munu__li">
            <a href="#contact" onClick={handleButton}>
              Contact
            </a>
          </li>
        </ul>
        <div className="buttonsSection">
          <div className="buttonSelected">Ligth</div>
          <div className="buttonSelected">Dark</div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
