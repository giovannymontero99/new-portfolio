import './Main.css';
import About from './main-components/About';
import Updates from './main-components/Updates';

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
        </main>
      </div>
    </section>
  );
};

export default Main;
