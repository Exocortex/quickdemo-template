import React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
  .tk-icon {
    stroke: black;
    stroke-width: 2;
  }
`;

export const CaretLeft = () => {
  return (
    <SVG
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M13.5 3L6.5 10L13.5 17" className="tk-icon" />
    </SVG>
  );
};

CaretLeft.iconName = 'caret-left';

export default CaretLeft;
