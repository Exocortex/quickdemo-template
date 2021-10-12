import React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
  .tk-icon {
    stroke: black;
    stroke-width: 2;
  }
`;

export const Download = () => {
  return (
    <SVG
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 2V13M10 13L14.5 8.5M10 13L5.5 8.5" className="tk-icon" />
      <path d="M3 14V17H17V14" className="tk-icon" />
    </SVG>
  );
};

Download.iconName = 'download';

export default Download;
