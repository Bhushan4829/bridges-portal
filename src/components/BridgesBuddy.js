import React, { useState } from 'react';
import styled from 'styled-components';

// Define styled components with improved structure and styling
const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f4f4f9;
  font-family: 'Arial', sans-serif;
`;

const PageContainer = styled.div`
  width: 375px; 
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden; 
  padding: 10px; 
`;

const Title = styled.h1`
  font-size: 28px; 
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px; 
  color: #333;
  padding: 10px;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

const BuddyImage = styled.img`
  width: 180px;
  height: auto;
`;

const ToggleWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
`;

const ToggleButton = styled.button`
  background-color: ${(props) => (props.active ? (props.mode === 'translational' ? '#000' : '#d9534f') : '#ccc')}; 
  color: white;
  border: none;
  border-radius: 20px;
  padding: 8px 15px; 
  cursor: pointer;
  margin: 0 5px; 
  font-weight: bold;
  transition: background-color 0.3s ease;
  font-size: 14px;

  &:hover {
    background-color: ${(props) => (props.mode === 'translational' ? '#333' : '#c9302c')}; 
  }
`;

const ContentWrapper = styled.div`
  padding: 10px; 
  text-align: center;
`;

const QuoteRectangle = styled.div`
  background-color: ${(props) => props.bgColor || '#e8f4ff'}; 
  border-radius: 20px;
  padding: 10px 15px; 
  margin: 5px 0; 
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.1);
`;

const QuoteText = styled.p`
  font-size: 14px; 
  font-weight: bold;
  margin: 0;
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

        {/* Conditional rendering based on the selected mode */}
        <ContentWrapper>
          {mode === 'translational' && (
            <>
              <QuoteRectangle bgColor="#e8f4ff"> {/* Light blue background */}
                <QuoteText>Stuck on a phrase? I'm your instant translator!</QuoteText>
              </QuoteRectangle>
              <QuoteRectangle bgColor="#f0e6ff"> {/* Light purple background */}
                <QuoteText>Ready to chat? Let's sharpen those language skills!</QuoteText>
              </QuoteRectangle>
            </>
          )}

          {mode === 'conversational' && (
            <>
              <QuoteRectangle bgColor="#ffe6e6"> {/* Light red background */}
                <QuoteText>Feeling something? Let's talk about it.</QuoteText>
              </QuoteRectangle>
              <QuoteRectangle bgColor="#ffecd1"> {/* Light orange background */}
                <QuoteText>Custom lessons just for you—let's get started!</QuoteText>
              </QuoteRectangle>
              <QuoteRectangle bgColor="#e7f3e7"> {/* Light green background */}
                <QuoteText>Need a wellness check-in? I'm here for you.</QuoteText>
              </QuoteRectangle>
            </>
          )}
        </ContentWrapper>

        <ImageWrapper>
          <BuddyImage src="chatbot.png" alt="Chat Bot" /> 
        </ImageWrapper>
      </PageContainer>
    </OuterContainer>
  );
};

export default BridgesBuddy;
