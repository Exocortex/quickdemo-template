import React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
  .tk-icon {
    stroke: black;
    stroke-width: 2;
  }
`;

export const Heart = () => {
  return (
    <SVG
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.3415 16.7526L10 17.3288L10.6585 16.7526C10.8433 16.5909 11.0265 16.4308 11.2081 16.2723C12.968 14.7352 14.5631 13.342 15.7407 12.0437C17.0224 10.6306 18 9.13211 18 7.47494C18 4.86487 15.9624 3.42782 13.9537 3.26924C12.5463 3.15812 11.0139 3.65409 10 4.83813C8.9861 3.65408 7.45375 3.15811 6.0463 3.26922C4.03761 3.42779 2 4.86483 2 7.4749C2 9.13209 2.9776 10.6306 4.2593 12.0437C5.43691 13.342 7.03205 14.7352 8.79195 16.2723C8.97347 16.4308 9.15675 16.5909 9.3415 16.7526Z"
        className="tk-icon"
      />
    </SVG>
  );
};

Heart.iconName = 'heart';

export default Heart;
