import React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
  .tk-icon {
    stroke: black;
    stroke-width: 2;
  }
`;

export const DoubleCaretLeft = () => {
  return (
    <SVG
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10.5 3L3.5 10L10.5 17" className="tk-icon" />
      <path d="M17 3L10 10L17 17" className="tk-icon" />
    </SVG>
  );
};

DoubleCaretLeft.iconName = 'double-caret-left';

export default DoubleCaretLeft;
