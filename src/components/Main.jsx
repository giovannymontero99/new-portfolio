import './Main.css';
import About from './main-components/About';
import Updates from './main-components/Updates';
import Skills from './main-components/Skills';

const Main = () => {
  return (
    <section className="mainSection">
      <div className="bodySection">
        <header id="home">
          <h3 className="main-title">Home</h3>
          <p className="main-description">Hi - Welcome to my Web Page!!</p>
        </header>
        <main>
          <Updates />
          <About />
          <Skills />
        </main>
      </div>
    </section>
  );
};

export default Main;
