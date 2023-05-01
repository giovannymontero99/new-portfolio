import React from 'react';
import './Contact.css';
import facebookLogo from '../../assets/facebook.svg';
import linkedinLogo from '../../assets/linkedin.svg';
import instagramLogo from '../../assets/instagram.svg';
import githubLogo from '../../assets/github.svg';

const Contact = () => {
  return (
    <footer id="contact">
      <div className="contact">
        <div>
          <a
            href="https://www.linkedin.com/in/giovanny-montero-carvajal-aa541a194/"
            target="_blank"
          >
            <img src={linkedinLogo} alt="facebook logo" />
          </a>
        </div>
        <div>
          <a href="https://github.com/giovannymontero99" target="_blank">
            <img src={githubLogo} alt="github logo" />
          </a>
        </div>
        <div>
          <a
            href="https://www.facebook.com/giovanny.carvajal.543/"
            target="_blank"
          >
            <img src={facebookLogo} alt="linkedin logo" />
          </a>
        </div>
        <div>
          <a
            href="https://www.instagram.com/giovannycarvajal1106/"
            target="_blank"
          >
            <img src={instagramLogo} alt="instagram logo" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
