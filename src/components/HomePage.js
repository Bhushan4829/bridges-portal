import React from 'react';
import styled from 'styled-components';
import Tile from './Tile';
import { useNavigate } from 'react-router-dom';

const HomeWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  padding: 1rem;
`;

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <HomeWrapper>
      <Tile title="AI Avatar - 'Bridges Buddy'" onClick={() => navigate('/bridges-buddy')} />
      <Tile title="AI-Powered Translation and Adaptability" onClick={() => navigate('/translation-adaptability')} />
      <Tile title="Centralized Community Engagement" onClick={() => navigate('/community-engagement')} />
    </HomeWrapper>
  );
};

export default HomePage;
