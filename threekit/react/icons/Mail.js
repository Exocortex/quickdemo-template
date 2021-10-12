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

export const Mail = () => {
  return (
    <SVG
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 17V3H19V17H1Z" className="tk-icon" />
      <path d="M1 5L10 11L19 5" className="tk-icon thin" />
    </SVG>
  );
};

Mail.iconName = 'mail';

export default Mail;
