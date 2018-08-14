import React from 'react';

import Section from '../components/home/section/section';
import AboutMe from '../components/home/about-me/about-me';
import Technologies from '../components/home/technologies/technologies';
import WorkExperience from '../components/home/work-experience/work-experience';

import './home.pcss';

function Home() {
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

export default Home;
