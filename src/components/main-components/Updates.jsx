import React from 'react';
import './Updates.css';

const Updates = () => {
  return (
    <section>
      <h3>Updates</h3>
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
    </section>
  );
};

export default Updates;
