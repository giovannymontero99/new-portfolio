import React, { useContext } from 'react';
import { ThemeContext } from '../App.jsx';
import './Main.css';
import Header from './Header';
import About from './main-components/About';
import Updates from './main-components/Updates';
import Skills from './main-components/Skills';
import Contact from './main-components/Contact';

const Main = () => {
  const { themeDark } = useContext(ThemeContext);

  return (
    <section className="mainSection">
      <div
        className="bodySection"
        style={themeDark ? null : { backgroundColor: '#f1f1f1' }}
      >
        <Header themeDark={themeDark} />
        <main>
          <About themeDark={themeDark} />
          <Updates />
          <Skills themeDark={themeDark} />
          <Contact />
        </main>
      </div>
    </section>
  );
};

export default Main;
