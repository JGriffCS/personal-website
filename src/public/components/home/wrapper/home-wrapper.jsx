import React from 'react';

import Section from '../section/section';
import AboutMe from '../about-me/about-me';
import Technologies from '../technologies/technologies';
import WorkExperience from '../work-experience/work-experience';

import './home-wrapper.pcss';

function HomeWrapper() {
  return (
    <div className="home-container">
      <div className="home-background" />
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
      </div>
    </div>
  );
}

export default HomeWrapper;
