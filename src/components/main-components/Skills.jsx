import React from 'react';
import htmlLogo from '../../assets/html.svg';
import cssLogo from '../../assets/css.svg';
import javascriptLogo from '../../assets/javascript.svg';
import reactLogo from '../../assets/react.svg';
import bootstrapLogo from '../../assets/bootstrap.svg';
import nodejsLogo from '../../assets/nodejs.svg';
import mysqlLogo from '../../assets/mysql.svg';
import gitLogo from '../../assets/git.svg';

const Skillls = () => {
  return (
    <section id="skills">
      <h3>Skills</h3>
      <div>
        <p>Todos los días me encuentro en aprendizaje de tecnologías como:</p>
        <div>
          <img src={htmlLogo} alt="html logo" />
        </div>
        <div>
          <img src={cssLogo} alt="css logo" />
        </div>
        <div>
          <img src={javascriptLogo} alt="javascript logo" />
        </div>
        <div>
          <img src={reactLogo} alt="react logo" />
        </div>
        <div>
          <img src={bootstrapLogo} alt="bootstrap logo" />
        </div>
        <div>
          <img src={nodejsLogo} alt="nodejs logo" />
        </div>
        <div>
          <img src={mysqlLogo} alt="mysql logo" />
        </div>
        <div>
          <img src={gitLogo} alt="git logo" />
        </div>
      </div>
    </section>
  );
};

export default Skillls;
