import './Main.css';
import About from './main-components/About';
import Updates from './main-components/Updates';
import Skills from './main-components/Skills';
import Contact from './main-components/Contact';

const Main = () => {
  return (
    <section className="mainSection">
      <div className="bodySection">
        <header id="home">
          <h3 className="main-title">Home</h3>
          <p className="main-description">
            -- Hi - Welcome to my Web Page!! --
          </p>
        </header>
        <main>
          <About />
          <Updates />
          <Skills />
          <Contact />
        </main>
      </div>
    </section>
  );
};

export default Main;
