import React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
  .tk-icon {
    stroke: black;
    stroke-width: 2;
  }
`;

export const Switch = () => {
  return (
    <SVG
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.4497 7.55025V3.44063V2.55025M12.4497 2.55025H17.4497M12.4497 2.55025L14.9497 5.05025C16.2165 6.317 17 8.067 17 9.99999C17 13.5265 14.3923 16.4439 11 16.9291M7.55025 12.4497V16.5594V17.4497M7.55025 17.4497H2.55025M7.55025 17.4497L5.05025 14.9497C3.7835 13.683 3 11.933 3 9.99999C3 6.47352 5.60771 3.55611 9 3.07088"
        className="tk-icon"
      />
    </SVG>
  );
};

Switch.iconName = 'switch';

export default Switch;
