import React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
  .tk-icon {
    stroke: black;
    stroke-width: 2;
  }

  .thin {
    stroke-width: 1;
  }
`;

export const Clipboard = () => {
  return (
    <SVG
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 4L8 4V3L12 3V4Z" className="tk-icon" />
      <path d="M6 3H4V18H16V3H14" className="tk-icon" />
      <path
        d="M11.5 2C11.5 1.17157 10.8284 0.5 10 0.5C9.17157 0.5 8.5 1.17157 8.5 2"
        className="tk-icon thin"
      />
      <path d="M7 7.5H13" className="tk-icon thin" />
      <path d="M7 10.5H13" className="tk-icon thin" />
      <path d="M7 13.5H11" className="tk-icon thin" />
    </SVG>
  );
};

Clipboard.iconName = 'clipboard';

export default Clipboard;
