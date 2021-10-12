import React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
  .tk-icon {
    stroke: black;
    stroke-width: 2;
  }
`;

export const Tag = () => {
  return (
    <SVG
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.5 11.5L8.5 18.5L18.5 8.5V2.5C18.5 1.94772 18.0523 1.5 17.5 1.5H11.5L1.5 11.5Z"
        className="tk-icon"
      />
      <ellipse
        cx="14.5026"
        cy="5.50262"
        rx="0.497391"
        ry="0.502594"
        transform="rotate(0.596652 14.5026 5.50262)"
        className="tk-icon"
      />
    </SVG>
  );
};

Tag.iconName = 'tag';

export default Tag;
