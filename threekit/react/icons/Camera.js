import React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
  .tk-icon {
    stroke: black;
    stroke-width: 2;
  }
`;

export const Camera = () => {
  return (
    <SVG
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M13.5 4H6.5L5.5 6H2V17H18V6H14.5L13.5 4Z" className="tk-icon" />
      <circle cx="10" cy="11" r="3" className="tk-icon" />
    </SVG>
  );
};

Camera.iconName = 'camera';

export default Camera;
