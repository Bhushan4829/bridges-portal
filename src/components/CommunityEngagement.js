import React from 'react';
import styled from 'styled-components';

// Container to center the page content vertically and horizontally
const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; // Full height of the viewport
  background-color: #f4f4f9; // Background color for the entire page
  padding: 20px;
`;

// Reusable PageContainer for all screens
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 100%;
  max-width: 400px; // Set a max width for larger screens
  margin: auto;
  box-sizing: border-box;
  background-color: #fff; // White background
  border-radius: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); // Subtle shadow for the container
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0; // Margin to space out the icons vertically
`;

const IconImage = styled.img`
  width: 120px; // Set the width of the icon images
  height: auto;
  margin-bottom: 10px; // Space between the image and the label
`;

const IconLabel = styled.h2`
  font-size: 18px;
  font-weight: 600;
  text-align: center;
`;

const CommunityEngagement = () => {
  return (
    <OuterContainer>
      <PageContainer>
        <Title>CommuniBridge</Title>
        <IconWrapper>
          <IconImage src="Connectivity_circle.png" alt="Connective Circle" />
          <IconLabel>Connective Circle</IconLabel>
        </IconWrapper>
        <IconWrapper>
          <IconImage src="Volunteer_hub.png" alt="Volunteer Hub" />
          <IconLabel>Volunteer Hub</IconLabel>
        </IconWrapper>
        <IconWrapper>
          <IconImage src="Feedback_flow.png" alt="Feedback Flow" />
          <IconLabel>Feedback Flow</IconLabel>
        </IconWrapper>
      </PageContainer>
    </OuterContainer>
  );
};

export default CommunityEngagement;
