import React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
  .tk-icon {
    stroke: black;
    stroke-width: 2;
  }
`;

export const ArrowLeft = () => {
  return (
    <SVG
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9 4L3 10M3 10L9 16M3 10L18.5 10" className="tk-icon" />
    </SVG>
  );
};

ArrowLeft.iconName = 'arrow-left';

export default ArrowLeft;
