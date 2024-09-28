import React from 'react';
import styled from 'styled-components';

const TileWrapper = styled.div`
  background: white;
  padding: 1rem;
  box-shadow: 0px 2px 5px rgba(0,0,0,0.1);
  cursor: pointer; // Makes it clear that the tile is clickable
  transition: transform 0.3s ease; // Optional: Adds a nice hover effect

  &:hover {
    transform: translateY(-5px); // Optional: Adds a hover effect
  }
`;

const Tile = ({ title, onClick }) => {
  return (
    <TileWrapper onClick={onClick}>
      <h2>{title}</h2>
    </TileWrapper>
  );
};

export default Tile;
