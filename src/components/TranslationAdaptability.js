import React from 'react';
import styled from 'styled-components';
//import globalTranslatorIcon from './assets/globaltranslate.png'; // Update with actual file paths
//import toneAdvisorIcon from './assets/tone-advisor.png';
//import meetingMentorIcon from './assets/meeting-mentor.png';
//import fastTrackLearningIcon from './assets/fast-track-learning.png';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 600px;
  margin-bottom: 2rem;
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
  max-width: 600px;
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
  height: 80px; /* Adjust size as needed */
  width: auto;
  margin-bottom: 1rem;
`;

const IconLabel = styled.p`
  font-size: 1rem;
  font-weight: bold;
`;

const TranslationAdaptability = () => {
  return (
    <Wrapper>
      <TitleWrapper>
        <img src="toplefticon.png" alt="BridgeTalk Logo" style={{ height: '50px' }} /> {/* Adjust the path */}
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
    </Wrapper>
  );
};

export default TranslationAdaptability;
