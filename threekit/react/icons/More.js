import React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
  .tk-icon {
    stroke: black;
    stroke-width: 2;
  }
`;

export const More = () => {
  return (
    <SVG
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.5 10C10.5 10.2761 10.2761 10.5 10 10.5C9.72386 10.5 9.5 10.2761 9.5 10C9.5 9.72386 9.72386 9.5 10 9.5C10.2761 9.5 10.5 9.72386 10.5 10Z"
        className="tk-icon"
      />
      <path
        d="M5 10C5 10.2761 4.77614 10.5 4.5 10.5C4.22386 10.5 4 10.2761 4 10C4 9.72386 4.22386 9.5 4.5 9.5C4.77614 9.5 5 9.72386 5 10Z"
        className="tk-icon"
      />
      <path
        d="M16 10C16 10.2761 15.7761 10.5 15.5 10.5C15.2239 10.5 15 10.2761 15 10C15 9.72386 15.2239 9.5 15.5 9.5C15.7761 9.5 16 9.72386 16 10Z"
        className="tk-icon"
      />
    </SVG>
  );
};

More.iconName = 'more';

export default More;
