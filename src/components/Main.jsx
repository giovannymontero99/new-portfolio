import './Main.css';
import Header from './Header';
import About from './main-components/About';
import Updates from './main-components/Updates';
import Skills from './main-components/Skills';
import Contact from './main-components/Contact';

const Main = () => {
  return (
    <section className="mainSection">
      <div className="bodySection">
        <Header />
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
