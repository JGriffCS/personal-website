import React from 'react';

import Section from '../components/home/section/section';
import AboutMe from '../components/home/about-me/about-me';
import Technologies from '../components/home/technologies/technologies';
import WorkExperience from '../components/home/work-experience/work-experience';

import reactLogo from '../../../assets/images/react.svg';
import reduxLogo from '../../../assets/images/redux.svg';
import postcssLogo from '../../../assets/images/post.svg';
import nodeLogo from '../../../assets/images/node.svg';

import './home.pcss';

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <Section title="Josh Griffiths">
          <AboutMe />
        </Section>
        <Section title="Skills and Technologies">
          <Technologies />
        </Section>
        <Section title="Work Experience">
          <WorkExperience />
        </Section>
        <Section title="Built Using">
          <div className="built-with-section-container">
            <img src={reactLogo} alt="React" />
            <img src={reduxLogo} alt="Redux" />
            <img src={postcssLogo} alt="PostCSS" />
            <img src={nodeLogo} alt="Node" />
          </div>
        </Section>
      </div>
    </div>
  );
}

export default Home;
