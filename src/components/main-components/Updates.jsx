import React from 'react';
import useIntersection from '../../hooks/useIntersection';
import './Updates.css';

const Updates = () => {
  const [isIntersected, projectRef] = useIntersection();

  return (
    <section id="projects" ref={projectRef}>
      <div
        className={
          isIntersected ? 'projects projects-isIntersected' : 'projects'
        }
      >
        <h3>Projects</h3>
        <div className="updatesSection">
          <div className="targetUpdate">
            <p>Day 1</p>
            <p>App Home Page</p>
          </div>
          <div className="targetUpdate">
            <p>Day 2</p>
            <p>User profile</p>
          </div>
          <div className="targetUpdate">
            <p>Day 3</p>
            <p>Sign up page</p>
          </div>
          <div className="targetUpdate">
            <p>Day 4</p>
            <p>Chat screen</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Updates;
