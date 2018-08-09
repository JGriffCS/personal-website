import React from 'react';

import giltLogo from '../../../../../assets/images/Gilt.jpg';
import missionLogo from '../../../../../assets/images/Mission Logo smaller.jpg';
import tpmLogo from '../../../../../assets/images/the-proven-method-squarelogo.png';
import cofLogo from '../../../../../assets/images/COF.png';

import './work-experience.pcss';

const WorkExperience = () => (
  <div className="work-experience-section">
    The descriptions below are condensed and intended as a brief overview.
    For a complete resume please reach out to me.
    <div className="position">
      <div className="position-info">
        <h3>
          <span className="company-name">Gilt Groupe K.K.</span>
          <span className="company-location">Tokyo, Japan</span>
        </h3>
        <h3>
          <span className="position-title">Software Engineer</span>
          <span className="position-dates">October 2017 - Present</span>
        </h3>
      </div>
      <div className="position-additional">
        <img className="company-logo" src={giltLogo} />
        <div className="position-description">
          <ul>
            <li>
              Responsible for the implementation of several new public facing modules including
              brand subscriptions and a reworked filter experience
            </li>
            <li>
              Integrated Vuex state management to simplify app-wide communication and data sharing
              between components
            </li>
            <li>
              Designed and configured the foundations for PostCSS and Jest for styling and unit
              testing new VueJS development
            </li>
          </ul>
        </div>
      </div>
    </div>
    <hr />
    <div className="position">
      <div className="position-info">
        <h3>
          <span className="company-name">Mission Communications</span>
          <span className="company-location">Norcross, GA</span>
        </h3>
        <h3>
          <span className="position-title">Senior Full-Stack Engineer</span>
          <span className="position-dates">May 2016 - October 2017</span>
        </h3>
      </div>
      <div className="position-additional">
        <img className="company-logo" src={missionLogo} />
        <div className="position-description">
          <ul>
            <li>
              Full-stack role working with SQL Server, .Net framework, and AngularJS with a
              focus on client-side code
            </li>
            <li>
              Lead an effort to improve development practices via common coding standards through
              linting, reusable components, and package management for 3rd party libraries
            </li>
            <li>
              Responsible for regular engagement with other employees in knowledge sharing
              sessions involving AngularJS best practices, ES6, and other front-end topics
            </li>
          </ul>
        </div>
      </div>
    </div>
    <hr />
    <div className="position">
      <div className="position-info">
        <h3>
          <span className="company-name">The Proven Method</span>
          <span className="company-location">Atlanta, GA</span>
        </h3>
        <h3>
          <span className="position-title">Senior Front-End Engineer</span>
          <span className="position-dates">January 2014 - May 2016</span>
        </h3>
      </div>
      <div className="position-additional">
        <img className="company-logo" src={tpmLogo} />
        <div className="position-description">
          <ul>
            <li>
              Developed and designed software for a diverse client base. Filled a variety of roles
              and used a number of different technologies
            </li>
            <li>
              Acted as the lead front-end resource on the rewrite of a sales application project
              using React and Redux
            </li>
            <li>
              Spearheaded long-term effort to convert an enterprise level application from a legacy
              system to an AngularJS SPA
            </li>
          </ul>
        </div>
      </div>
    </div>
    <hr />
    <div className="position">
      <div className="position-info">
        <h3>
          <span className="company-name">College Options Foundation</span>
          <span className="company-location">Peachtree City, GA</span>
        </h3>
        <h3>
          <span className="position-title">Web Coordinator</span>
          <span className="position-dates">September 2013 - January 2014</span>
        </h3>
      </div>
      <div className="position-additional">
        <img className="company-logo" src={cofLogo} />
        <div className="position-description">
          <ul>
            <li>
              Migrated main company website from PHP to WordPress
            </li>
            <li>
              Responsible for continued maintenance of WordPress site
              as well as several additional websites
            </li>
            <li>
              Provided live stream support for the company's JROTC 99th Anniversary
              5k run in Washington DC
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default WorkExperience;
