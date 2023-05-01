import React from 'react';
import useIntersection from '../hooks/useIntersection';
import './Header.css';

const Header = (props) => {
  const [isIntersected, homeRef] = useIntersection();
  return (
    <header id="home" ref={homeRef}>
      <h3
        className={
          isIntersected ? 'main-title main-title-isInersected ' : 'main-title'
        }
        style={props.themeDark ? null : { color: '#020202' }}
      >
        Home
      </h3>
      <p
        className={
          isIntersected
            ? 'main-description main-description-isIntersected'
            : 'main-description'
        }
        style={props.themeDark ? null : { color: '#020202' }}
      >
        -- Hi - Welcome to my Web Page!! --
      </p>
    </header>
  );
};

export default Header;
