import React from 'react';
import styled from 'styled-components';

const StyleCard = styled.div`
  box-shadow: 1px 1px 2px 0 black;
  margin: 10px;
  overflow: hidden;
  position: relative;
  width: 345px;
  height: 400px;
  border-radius: 4px;

  div {
    padding: 0 15px;
    text-align: left;
  }
  h2 {
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.6;
    letter-spacing: 0.0075em;
  }
`;

const Thumbnails = styled.div`
  background-image: url(${(props) => props.url});
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 140px;
`;

const Card = ({ card }) => {
  return (
    <StyleCard>
      <Thumbnails url={card.snippet.thumbnails.medium.url}></Thumbnails>
      <div>
        <h2>{card.snippet.title}</h2>
        <p>{card.snippet.description}</p>
      </div>
    </StyleCard>
  );
};

export default Card;
