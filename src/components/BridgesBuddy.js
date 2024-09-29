import React from 'react';
import styled from 'styled-components';
import { FaMicrophone } from 'react-icons/fa'; // Import the microphone icon from react-icons

// Styling for the overall page container
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 100%; // Full width to mimic a mobile view
  max-width: 400px; // Set a max width for larger screens
  margin: auto;
  height: 100vh;
  box-sizing: border-box;
  background-color: #fff; // White background
`;

// Styling for the title
const Title = styled.h1`
  font-size: 24px;
  color: #000; // Black color for the title
  margin-top: 20px;
`;

// Styling for the avatar image
const AvatarImage = styled.img`
  width: 80%; // Responsive width
  margin-top: 20px;
`;

// Styling for the content box
const ContentBox = styled.div`
  width: 90%;
  border: 2px solid #ccc; // Light gray border
  margin: 20px 0;
  padding: 10px;
  border-radius: 15px; // Rounded edges for the box
`;

// Styling for the tap to speak button
const SpeakButton = styled.button`
  background-color: #f0f0f0; // Light gray background
  border: none;
  border-radius: 25px; // Fully rounded edges
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  cursor: pointer;
  width: 80%; // Adjust as needed
  margin: 20px 0;
`;

// Icon styling
const Icon = styled(FaMicrophone)`
  color: #888; // Icon color
  margin-right: 10px; // Space between icon and text
`;

const BridgesBuddy = () => {
  return (
    <PageContainer>
      <Title>BridgesBuddy</Title>
      <AvatarImage src="bot_avatar.jpg" alt="Avatar Image" />
      <ContentBox>
        <p>Content related to BridgesBuddy will be displayed here.</p>
        <p>More detailed information can also go here in this section.</p>
      </ContentBox>
      <SpeakButton>
        <Icon size={24} />
        Tap to Speak
      </SpeakButton>
    </PageContainer>
  );
};

export default BridgesBuddy;
