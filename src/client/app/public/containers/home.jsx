import React from 'react';

import personalPhoto from '../../../assets/me.png';
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
            Meeeeeee
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
