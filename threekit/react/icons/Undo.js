import React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
  .tk-icon {
    stroke: black;
    stroke-width: 2;
  }
`;

export const Undo = () => {
  return (
    <SVG
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 6L7 2M2 6L7 10M2 6H12.5C14.1667 6 17.5 7 17.5 11C17.5 15 14.1667 16 12.5 16H8"
        className="tk-icon"
      />
    </SVG>
  );
};

Undo.iconName = 'undo';

export default Undo;
