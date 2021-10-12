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

export const Info = () => {
  return (
    <SVG
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="10" cy="10" r="8" className="tk-icon" />
      <circle cx="10" cy="6" r="0.5" className="tk-icon thin" />
      <path
        d="M8 8.5H9.5M10.5 14.5V8.5H9.5M10.5 14.5H9.5M10.5 14.5H12M9.5 14.5V8.5M9.5 14.5H8"
        className="tk-icon thin"
      />
    </SVG>
  );
};

Info.iconName = 'info';

export default Info;
