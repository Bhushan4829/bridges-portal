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
  max-width: 500px; 
  height: 90vh;
  margin: auto;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 500px;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
`;

const IconGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  width: 100%;
  max-width: 500px; 
`;

// Adjusted IconCard to include background color variations
const IconCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  text-align: center;
  border-radius: 15px; // Rounded corners
  background-color: ${(props) => props.bgColor || '#e8f4ff'}; // Use props to assign background color
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.1); // Subtle shadow effect
  transition: transform 0.2s; // Slight animation on hover
  cursor: pointer;

  &:hover {
    transform: scale(1.05); // Slight zoom effect on hover
  }
`;

const IconImage = styled.img`
  height: 60px; 
  width: auto;
  margin-bottom: 1rem;
`;

const IconLabel = styled.p`
  font-size: 1rem;
  font-weight: bold;
`;

// Main component
const TranslationAdaptability = () => {
  return (
    <OuterContainer>
      <PageContainer>
        <TitleWrapper>
          <img src="toplefticon.png" alt="BridgeTalk Logo" style={{ height: '50px' }} />
          <Title>BridgesTalk</Title>
        </TitleWrapper>
        <IconGrid>
          {/* Applying unique background colors to each IconCard */}
          <IconCard bgColor="#ffe6e6"> {/* Light red */}
            <IconImage src={"globaltranslate.png"} alt="Global Translator" />
            <IconLabel>Global Translator</IconLabel>
          </IconCard>
          <IconCard bgColor="#ffecd1"> {/* Light orange */}
            <IconImage src={"2brains.png"} alt="Tone Advisor" />
            <IconLabel>Tone Advisor</IconLabel>
          </IconCard>
          <IconCard bgColor="#e7f3e7"> {/* Light green */}
            <IconImage src={"bot.png"} alt="Meeting Mentor" />
            <IconLabel>Meeting Mentor</IconLabel>
          </IconCard>
          <IconCard bgColor="#e8f4ff"> {/* Light blue */}
            <IconImage src={"computer.png"} alt="FastTrack Learning" />
            <IconLabel>FastTrack Learning</IconLabel>
          </IconCard>
        </IconGrid>
      </PageContainer>
    </OuterContainer>
  );
};

export default TranslationAdaptability;
