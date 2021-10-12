import React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
  .tk-icon {
    stroke: black;
    stroke-width: 2;
  }
`;

export const CaretDown = () => {
  return (
    <SVG
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3 7L10 14L17 7" className="tk-icon" />
    </SVG>
  );
};

CaretDown.iconName = 'caret-down';

export default CaretDown;
