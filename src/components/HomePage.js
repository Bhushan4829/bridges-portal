import React from 'react';
import './HomePage.css'; // Custom styles for homepage
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  
  return (
    <div className="homepage">
      <div className="main-section">
        <div className="left-feature">
          <img src="cultural_competence.png" alt="Cultural Competence" className="feature-image"/>
          <h2 className="feature-title">Cultural Competence</h2>
        </div>
        <div className="right-feature">
          <img src="stigma_free.png" alt="Stigma-Free Education" className="feature-image"/>
          <h2 className="feature-title">Stigma-Free Education</h2>
        </div>
      </div>

      <header className="homepage-header">
        <h1 className="main-title">BridgesPortal</h1>
        <h3 className="sub-title">Navigate, Connect, Thrive</h3>
        <p className="tagline">Embrace Your New World with Confidence and Wellness!</p>
      </header>
      
      <div className="services-section">
        <div className="service" onClick={() => navigate('/bridges-buddy')}>
          <img src="hipic.png" alt="BridgesBuddy" className="service-image"/>
          <h3 className="service-title">BridgesBuddy</h3>
        </div>
        <div className="service" onClick={() => navigate('/translation-adaptability')}>
          <img src="bridge_talk_home.png" alt="BridgeTalk" className="service-image"/>
          <h3 className="service-title">BridgeTalk</h3>
        </div>
        <div className="service" onClick={() => navigate('/community-engagement')}>
          <img src="communi_bridge_2.png" alt="CommuniBridge" className="service-image"/>
          <h3 className="service-title">CommuniBridge</h3>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
