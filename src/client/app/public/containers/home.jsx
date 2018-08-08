import React from 'react';

import Section from '../components/home/section/section';
import WorkExperience from '../components/home/work-experience/work-experience';

import personalPhoto from '../../../assets/images/me.png';
import reactLogo from '../../../assets/images/react.svg';
import reduxLogo from '../../../assets/images/redux.svg';
import postcssLogo from '../../../assets/images/post.svg';
import nodeLogo from '../../../assets/images/node.svg';

import './home.pcss';

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="info-section-container">
          <div className="personal-photo-container">
            <img src={personalPhoto} alt="me" />
          </div>
          <div className="personal-description">
            <Section title="Josh Griffiths">
              <div>
                Description goes here!
              </div>
            </Section>
          </div>
        </div>
        <Section title="Skills and Technologies">
          <div />
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
