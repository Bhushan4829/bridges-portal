import React, { useState } from 'react';
import styled from 'styled-components';

// Define styled components with improved structure and styling
const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f4f4f9;
  font-family: 'Arial', sans-serif; // Consistent font
`;

const PageContainer = styled.div`
  width: 375px; // Match the image width
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden; // Hide content overflow for rounded corners
  padding: 10px; // Reduce padding to decrease overall height
`;

const Title = styled.h1`
  font-size: 28px; // Slightly smaller font size
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px; // Reduced margin
  color: #333;
  padding: 10px; // Add smaller padding to the title area
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px; // Reduce spacing below the image
`;

const BuddyImage = styled.img`
  width: 180px; // Slightly smaller width for the main buddy image
  height: auto;
`;

const ToggleWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 15px; // Reduced margin between toggle and text area
`;

const ToggleButton = styled.button`
  background-color: ${(props) => (props.active ? (props.mode === 'translational' ? '#000' : '#d9534f') : '#ccc')}; // Use Bootstrap-like red
  color: white;
  border: none;
  border-radius: 20px;
  padding: 8px 15px; // Slightly smaller padding
  cursor: pointer;
  margin: 0 5px; // Reduced margin between buttons
  font-weight: bold;
  transition: background-color 0.3s ease;
  font-size: 14px; // Reduced font size for a better fit

  &:hover {
    background-color: ${(props) => (props.mode === 'translational' ? '#333' : '#c9302c')}; // Darker red on hover
  }
`;

const ContentWrapper = styled.div`
  padding: 10px; // Reduced padding for a compact layout
  text-align: center; // Center text content
`;

// Rectangle Container for each suggestion prompt
const QuoteRectangle = styled.div`
  background-color: ${(props) => props.bgColor || '#e8f4ff'}; // Different background colors for rectangles
  border-radius: 20px; // Slightly less rounded corners for rectangles
  padding: 10px 15px; // Reduced padding inside each rectangle
  margin: 5px 0; // Smaller space between rectangles
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.1); // Subtle shadow for the rectangle
`;

const QuoteText = styled.p`
  font-size: 14px; // Reduced font size to fit more content
  font-weight: bold;
  margin: 0; // Remove default margin for the text
  color: #333;
`;

const BridgesBuddy = () => {
  const [mode, setMode] = useState('translational');

  return (
    <OuterContainer>
      <PageContainer>
        <Title>BridgesBuddy</Title>

        <ImageWrapper>
          <BuddyImage src="botgif.gif" alt="Bridges Buddy" /> 
        </ImageWrapper>

        <ToggleWrapper>
          <ToggleButton
            mode="translational"
            active={mode === 'translational'}
            onClick={() => setMode('translational')}
          >
            Translational
          </ToggleButton>
          <ToggleButton
            mode="conversational"
            active={mode === 'conversational'}
            onClick={() => setMode('conversational')}
          >
            Conversational
          </ToggleButton>
        </ToggleWrapper>

        {/* Content Area with Reduced Vertical Spacing */}
        <ContentWrapper>
          <QuoteRectangle bgColor="#ffe6e6"> {/* Light red background */}
            <QuoteText>Feeling something? Let's talk about it.</QuoteText>
          </QuoteRectangle>
          <QuoteRectangle bgColor="#ffecd1"> {/* Light orange background */}
            <QuoteText>Custom lessons just for you—let's get started!</QuoteText>
          </QuoteRectangle>
          <QuoteRectangle bgColor="#e7f3e7"> {/* Light green background */}
            <QuoteText>Need a wellness check-in? I'm here for you.</QuoteText>
          </QuoteRectangle>
          <QuoteRectangle bgColor="#e8f4ff"> {/* Light blue background */}
            <QuoteText>Stuck on a phrase? I'm your instant translator!</QuoteText>
          </QuoteRectangle>
          <QuoteRectangle bgColor="#f0e6ff"> {/* Light purple background */}
            <QuoteText>Ready to chat? Let's sharpen those language skills!</QuoteText>
          </QuoteRectangle>
        </ContentWrapper>

        <ImageWrapper>
          <BuddyImage src="chatbot.png" alt="Chat Bot" /> 
        </ImageWrapper>
      </PageContainer>
    </OuterContainer>
  );
};

export default BridgesBuddy;
