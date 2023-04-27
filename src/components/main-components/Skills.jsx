import React, { useRef, useEffect, useState } from 'react';
import './Skills.css';
import htmlLogo from '../../assets/html.svg';
import cssLogo from '../../assets/css.svg';
import javascriptLogo from '../../assets/javascript.svg';
import reactLogo from '../../assets/react.svg';
import bootstrapLogo from '../../assets/bootstrap.svg';
import nodejsLogo from '../../assets/nodejs.svg';
import mysqlLogo from '../../assets/mysql.svg';
import gitLogo from '../../assets/git.svg';

const Skills = () => {
  const skillsRef = useRef();
  const [isIntersected, setIsIntersected] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (observedSection) => {
        observedSection.forEach((entry) =>
          setIsIntersected(entry.isIntersecting)
        );
      },
      { threshold: 0.3 }
    );
    observer.observe(skillsRef.current);
  }, []);

  return (
    <section
      id="skills"
      ref={skillsRef}
      className={isIntersected ? '' : 'observed'}
    >
      <div>
        <div className="skills-title">
          <h3>Skills</h3>
        </div>
        <div>
          <p>Todos los días me encuentro en aprendizaje de tecnologías como:</p>
        </div>
        <div className="skills-logos">
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
      </div>
    </section>
  );
};

export default Skills;
