import React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
  .tk-icon {
    stroke: black;
    stroke-width: 2;
  }
`;

export const Copy = () => {
  return (
    <SVG
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 6C15 6 15.5 6 16 6C17 6 17 6 17 7C17 8 17 16 17 17C17 18 17 18 16 18C15 18 9 18 8 18C7 18 6.99988 18 7 17C7.00006 16.5669 7 16 7 16"
        className="tk-icon"
      />
      <path d="M3 2L13 2V14H3L3 2Z" className="tk-icon" />
    </SVG>
  );
};

Copy.iconName = 'copy';

export default Copy;
