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
  max-width: 500px;
  margin: auto;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    padding: 15px;
  }
  @media (max-width: 480px) {
    padding: 10px;
    max-width: 90%;
  }
`;

const Header = styled.header`
  margin-bottom: 20px;
  text-align: center;
`;

const MainTitle = styled.h1`
  font-family: 'Georgia', serif;
  font-size: 48px;
  font-weight: bold;
  color: #333;
  @media (max-width: 768px) {
    font-size: 36px;
  }
  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

const SubTitle = styled.h3`
  font-family: 'Arial', sans-serif;
  font-size: 24px;
  color: #6a6a6a;
  @media (max-width: 768px) {
    font-size: 20px;
  }
  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const Tagline = styled.p`
  font-family: 'Courier New', Courier, monospace;
  font-size: 18px;
  color: #a0522d;
  font-weight: 600;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const MainSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const Feature = styled.div`
  flex: 0 0 30%;
  margin: 0 5px;
  text-align: center;
  @media (max-width: 768px) {
    flex: 0 0 40%;
  }
  @media (max-width: 480px) {
    flex: 0 0 80%;
    margin: 10px 0;
  }
`;

const FeatureImage = styled.img`
  width: 120px;
  height: auto;
  transition: box-shadow 0.3s ease;
  @media (max-width: 768px) {
    width: 100px;
  }
  @media (max-width: 480px) {
    width: 80px;
  }
`;

const FeatureTitle = styled.h2`
  font-family: 'Arial', sans-serif;
  font-size: 16px;
  color: #4b0082;
  margin-top: 5px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const ServicesSection = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
  width: 100%;
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const Service = styled.div`
  margin: 10px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s ease;
  @media (max-width: 768px) {
    margin: 8px;
  }
  @media (max-width: 480px) {
    margin: 5px 0;
    width: 100%;
  }
  
  &:hover {
    transform: scale(1.05);
  }
`;

const ServiceImage = styled.img`
  width: 100px;
  height: auto;
  transition: box-shadow 0.3s ease;
  @media (max-width: 768px) {
    width: 80px;
  }
  @media (max-width: 480px) {
    width: 60px;
  }
  
  &:hover {
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  }
`;

const ServiceTitle = styled.h3`
  font-family: 'Verdana', sans-serif;
  font-size: 16px;
  color: #333;
  margin-top: 5px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 480px) {
    font-size: 12px;
  }
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
