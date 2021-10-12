import React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
  .tk-icon {
    stroke: black;
    stroke-width: 2;
  }
`;

export const CaretRight = () => {
  return (
    <SVG
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6.5 17L13.5 10L6.5 3" className="tk-icon" />
    </SVG>
  );
};

CaretRight.iconName = 'caret-right';

export default CaretRight;
