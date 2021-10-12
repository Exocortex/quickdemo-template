import React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
  .tk-icon {
    stroke: black;
    stroke-width: 2;
  }
`;

export const DoubleCaretRight = () => {
  return (
    <SVG
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 17L17 10L10 3" className="tk-icon" />
      <path d="M3.5 17L10.5 10L3.5 3" className="tk-icon" />
    </SVG>
  );
};

DoubleCaretRight.iconName = 'double-caret-right';

export default DoubleCaretRight;
