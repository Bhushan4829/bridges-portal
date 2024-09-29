import React from 'react';
import styled from 'styled-components';

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

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
`;

// Updated IconWrapper with background colors and styles similar to BridgesBuddy prompts
const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px 0; // Reduced vertical margin to fit all content
  background-color: ${(props) => props.bgColor || '#e8f4ff'}; // Dynamic background colors for each tile
  border-radius: 20px; // Rounded corners for tiles
  padding: 15px; // Add padding to create a boxed effect
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.1); // Subtle shadow for the rectangle
`;

const IconImage = styled.img`
  width: 100px; // Set the width of the icon images
  height: auto;
  margin-bottom: 10px; // Space between the image and the label
`;

const IconLabel = styled.h2`
  font-size: 18px;
  font-weight: 600;
  text-align: center;
`;

// Community Engagement component
const CommunityEngagement = () => {
  return (
    <OuterContainer>
      <PageContainer>
        <Title>CommuniBridges</Title>

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
