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
  max-width: 400px;
  margin: auto;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;

// Wrapper for the header section including the button and title
const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
`;

// Button to navigate to the homepage
const HomeButton = styled.img`
  height: 50px;
  cursor: pointer;
  margin-right: 20px; // Add some spacing between button and title
`;

// Updated IconWrapper with background colors and styles similar to BridgesBuddy prompts
const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px 0;
  background-color: ${(props) => props.bgColor || '#e8f4ff'}; 
  border-radius: 20px; 
  padding: 15px;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.1);
`;

const IconImage = styled.img`
  width: 100px; 
  height: auto;
  margin-bottom: 10px;
`;

const IconLabel = styled.h2`
  font-size: 18px;
  font-weight: 600;
  text-align: center;
`;

// Community Engagement component
const CommunityEngagement = () => {
  const navigate = useNavigate(); // Hook to handle navigation

  return (
    <OuterContainer>
      <PageContainer>
        <HeaderWrapper>
          {/* Navigation Button to go to Homepage */}
          <HomeButton
            src="toplefticon.png"
            alt="Home"
            onClick={() => navigate('/home')} // Navigate to homepage on click
          />
          <Title>CommuniBridges</Title>
        </HeaderWrapper>

        {/* Icon Cards with Different Background Colors */}
        <IconWrapper bgColor="#ffe6e6"> {/* Light Red Background */}
          <IconImage src="Connectivity_circle.png" alt="Connective Circle" />
          <IconLabel>Connective Circle</IconLabel>
        </IconWrapper>

        <IconWrapper bgColor="#ffecd1"> {/* Light Orange Background */}
          <IconImage src="Volunteer_hub.png" alt="Volunteer Hub" />
          <IconLabel>Volunteer Hub</IconLabel>
        </IconWrapper>

        <IconWrapper bgColor="#e7f3e7"> {/* Light Green Background */}
          <IconImage src="Feedback_flow.png" alt="Feedback Flow" />
          <IconLabel>Feedback Flow</IconLabel>
        </IconWrapper>
      </PageContainer>
    </OuterContainer>
  );
};

export default CommunityEngagement;
