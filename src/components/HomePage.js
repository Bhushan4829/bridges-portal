import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// Container to center the page content vertically and horizontally
const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f4f4f9;
  padding: 20px;
`;

// Reusable PageContainer for all screens
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 100%;
  max-width: 500px; /* Increased max-width for a better fit */
  margin: auto;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;

const Header = styled.header`
  margin-bottom: 20px; /* Reduced margin */
  text-align: center;
`;

const MainTitle = styled.h1`
  font-family: 'Georgia', serif;
  font-size: 48px;
  font-weight: bold;
  color: #333;
`;

const SubTitle = styled.h3`
  font-family: 'Arial', sans-serif;
  font-size: 24px;
  color: #6a6a6a;
`;

const Tagline = styled.p`
  font-family: 'Courier New', Courier, monospace;
  font-size: 18px; /* Reduced font size */
  color: #a0522d;
  font-weight: 600;
  margin-bottom: 10px; /* Reduced space below tagline */
`;

const MainSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px; /* Reduced margin */
`;

const Feature = styled.div`
  flex: 0 0 30%;
  margin: 0 5px; /* Reduced margin between features */
  text-align: center;
`;

const FeatureImage = styled.img`
  width: 120px; /* Adjusted image size */
  height: auto;
  transition: box-shadow 0.3s ease;
`;

const FeatureTitle = styled.h2`
  font-family: 'Arial', sans-serif;
  font-size: 16px; /* Slightly smaller font */
  color: #4b0082;
  margin-top: 5px; /* Reduced space above the title */
`;

const ServicesSection = styled.div`
  display: flex;
  justify-content: space-around; /* Evenly space the services */
  align-items: center;
  margin-top: 20px; /* Reduced margin */
  width: 100%; /* Ensure full width */
`;

const Service = styled.div`
  margin: 10px; /* Reduced margin for a tighter fit */
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const ServiceImage = styled.img`
  width: 100px; /* Reduced size for better fit */
  height: auto;
  transition: box-shadow 0.3s ease;
  
  &:hover {
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  }
`;

const ServiceTitle = styled.h3`
  font-family: 'Verdana', sans-serif;
  font-size: 16px; /* Slightly smaller font */
  color: #333;
  margin-top: 5px; /* Reduced space */
`;

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <OuterContainer>
      <PageContainer>
        <MainSection>
          <Feature>
            <FeatureImage src="cultural_competence.png" alt="Cultural Competence" />
            <FeatureTitle>Cultural Competence</FeatureTitle>
          </Feature>
          <Feature>
            <FeatureImage src="stigma_free.png" alt="Stigma-Free Education" />
            <FeatureTitle>Stigma Free Education</FeatureTitle>
          </Feature>
        </MainSection>

        <Header>
          <MainTitle>BridgesPortal</MainTitle>
          <SubTitle>Navigate, Connect, Thrive</SubTitle>
          <Tagline>Embrace Your New World with Confidence and Wellness!</Tagline>
        </Header>
        
        <ServicesSection>
          <Service onClick={() => navigate('/bridges-buddy')}>
            <ServiceImage src="hipic.png" alt="BridgesBuddy" />
            <ServiceTitle>BridgesBuddy</ServiceTitle>
          </Service>
          <Service onClick={() => navigate('/translation-adaptability')}>
            <ServiceImage src="bridge_talk_home.png" alt="BridgeTalk" />
            <ServiceTitle>BridgeTalk</ServiceTitle>
          </Service>
          <Service onClick={() => navigate('/community-engagement')}>
            <ServiceImage src="communi_bridge_2.png" alt="CommuniBridge" />
            <ServiceTitle>CommuniBridge</ServiceTitle>
          </Service>
        </ServicesSection>
      </PageContainer>
    </OuterContainer>
  );
};

export default HomePage;
