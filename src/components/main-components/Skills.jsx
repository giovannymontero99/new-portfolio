import React from 'react';
import htmlLogo from '../../assets/html.svg';
import cssLogo from '../../assets/css.svg';

const Skillls = () => {
  return (
    <section id="skills">
      <h3>Skills</h3>
      <div>
        <p>Todos los días me encuentro en aprendizaje de tecnologías como:</p>
        <div>
          <img src={htmlLogo} alt="" />
        </div>
        <div>
          <img src={cssLogo} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Skillls;
