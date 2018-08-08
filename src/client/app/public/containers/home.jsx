import React from 'react';

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
            <h3>Josh Griffiths</h3>
            <p>Etiam maximus blandit tincidunt. Ut nibh eros, gravida venenatis purus et, gravida blandit purus. Fusce et augue nec lorem pharetra lobortis vel vel mi. Vivamus dignissim finibus ex et consectetur. Donec rutrum sapien urna. Aenean ut varius lorem. Vestibulum ultrices nunc risus, vitae gravida dolor sodales sit amet. Sed eu risus est. Nulla neque nulla, dictum sed nulla ac, dictum dictum massa. Vestibulum suscipit non velit in lacinia. Duis blandit vehicula viverra. Duis eget elementum libero.</p>
          </div>
        </div>
        <h3>Find Me</h3>
        <div className="contact-section-container">

        </div>
        <h3>Built Using</h3>
        <div className="built-with-section-container">
          <img src={reactLogo} alt="React" />
          <img src={reduxLogo} alt="Redux" />
          <img src={postcssLogo} alt="PostCSS" />
          <img src={nodeLogo} alt="Node" />
        </div>
      </div>
    </div>
  );
}

export default Home;
