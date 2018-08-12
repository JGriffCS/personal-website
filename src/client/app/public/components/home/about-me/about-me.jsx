import React from 'react';

import './about-me.pcss';
import personalPhoto from '../../../../../assets/images/me.png';
import github from '../../../../../assets/images/github.png';
import linkedin from '../../../../../assets/images/linkedin.png';
import gmail from '../../../../../assets/images/gmail.png';

const AboutMe = () => (
  <div className="about-me-wrapper">
    <img className="personal-photo" src={personalPhoto} alt="me" />
    <p>
      Software Engineer currently living in Tokyo, Japan. Roughly 5 years of full-stack web
      development experience with a specialization in front-end development. Currently working
      professionally in a mixed environment maintaining an AngularJS, CoffeeScript, and Less stack,
      but transitioning to a stack comprised of VueJS, ES6, and PostCSS. For hobby projects,
      including this site, I&#39;m currently focused on a ReactJS, Redux, and PostCSS stack.
    </p>
    <p>
      In my spare time I enjoy keeping up to date with the latest front-end technologies through
      hobby projects, playing video games, learning Japanese, and exploring around Tokyo. I&#39;m
      also very passionate about travel and try to do so as much as possible.
    </p>
    <div className="social-links">
      <a
        href="mailto:jgriffcs@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={gmail} alt="gmail" />
      </a>
      <a
        href="https://www.github.com/jgriffcs"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={github} alt="github" />
      </a>
      <a
        href="https://www.linkedin.com/in/jgriffcs"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={linkedin} alt="linkedin" />
      </a>
    </div>
  </div>
);

export default AboutMe;
