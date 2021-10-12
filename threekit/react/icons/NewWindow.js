import React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
  .tk-icon {
    stroke: black;
    stroke-width: 2;
  }
`;

export const NewWindow = () => {
  return (
    <SVG
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.5 9.5L17 3M17 3V9M17 3H11M8 3H4C3.44772 3 3 3.44772 3 4V16C3 16.5523 3.44772 17 4 17H16C16.5523 17 17 16.5523 17 16V12"
        className="tk-icon"
      />
    </SVG>
  );
};

NewWindow.iconName = 'new-window';

export default NewWindow;
