import React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
  .tk-icon {
    stroke: black;
    stroke-width: 2;
  }
`;

export const CaretUp = () => {
  return (
    <SVG
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17 14L10 7L3 14" className="tk-icon" />
    </SVG>
  );
};

CaretUp.iconName = 'caret-up';

export default CaretUp;
