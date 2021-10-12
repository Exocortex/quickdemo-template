import React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
  .tk-icon {
    stroke: black;
    stroke-width: 2;
  }
`;

export const Checkmate = () => {
  return (
    <SVG
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M2 8.5L8 14.5L18 4.5" className="tk-icon" />
    </SVG>
  );
};

Checkmate.iconName = 'checkmate';

export default Checkmate;
