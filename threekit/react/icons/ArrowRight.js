import React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
  .tk-icon {
    stroke: black;
    stroke-width: 2;
  }
`;

export const ArrowRight = () => {
  return (
    <SVG
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.5 16L17.5 10M17.5 10L11.5 4M17.5 10L2 10"
        className="tk-icon"
      />
    </SVG>
  );
};

ArrowRight.iconName = 'arrow-right';

export default ArrowRight;
