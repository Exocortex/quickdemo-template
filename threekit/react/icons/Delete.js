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

export const Delete = () => {
  return (
    <SVG
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 5C5 5 5 16 5 17C5 18 5 18 6 18C7 18 13 18 14 18C15 18 15 18 15 17C15 16 15 5 15 5"
        className="tk-icon"
      />
      <path
        d="M3 3C3 3 6.65685 3 9 3M17 3C17 3 13.3431 3 11 3M9 3C9 2 9 2 10 2C11 2 11 2 11 3M9 3C9.78105 3 10.219 3 11 3"
        className="tk-icon"
        strokeLinecap="round"
      />
      <path
        d="M8.5 14.5V6.5M11.5 14.5V6.5"
        className="tk-icon thin"
        strokeLinecap="round"
      />
    </SVG>
  );
};

Delete.iconName = 'delete';

export default Delete;
