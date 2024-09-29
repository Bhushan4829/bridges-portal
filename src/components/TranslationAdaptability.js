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
  max-width: 500px; // Set a max width for larger screens
  height: 90vh; // Adjusted height to match the vertical size of HomePage
  margin: auto;
  box-sizing: border-box;
  background-color: #fff; // White background
  border-radius: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); // Subtle shadow for the container
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 500px; // Adjusted to fit the PageContainer's size
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
  max-width: 500px; // Adjusted to fit the increased container size
`;

const IconCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  padding: 1rem;
  text-align: center;
  border-radius: 8px;
  background: white;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

const IconImage = styled.img`
  height: 60px; /* Adjusted size for consistency */
  width: auto;
  margin-bottom: 1rem;
`;

const IconLabel = styled.p`
  font-size: 1rem;
  font-weight: bold;
`;

const TranslationAdaptability = () => {
  return (
    <OuterContainer>
      <PageContainer>
        <TitleWrapper>
          <img src="toplefticon.png" alt="BridgeTalk Logo" style={{ height: '50px' }} />
          <Title>BridgeTalk</Title>
        </TitleWrapper>
        <IconGrid>
          <IconCard>
            <IconImage src={"globaltranslate.png"} alt="Global Translator" />
            <IconLabel>Global Translator</IconLabel>
          </IconCard>
          <IconCard>
            <IconImage src={"2brains.png"} alt="Tone Advisor" />
            <IconLabel>Tone Advisor</IconLabel>
          </IconCard>
          <IconCard>
            <IconImage src={"bot.png"} alt="Meeting Mentor" />
            <IconLabel>Meeting Mentor</IconLabel>
          </IconCard>
          <IconCard>
            <IconImage src={"computer.png"} alt="FastTrack Learning" />
            <IconLabel>FastTrack Learning</IconLabel>
          </IconCard>
        </IconGrid>
      </PageContainer>
    </OuterContainer>
  );
};

export default TranslationAdaptability;
