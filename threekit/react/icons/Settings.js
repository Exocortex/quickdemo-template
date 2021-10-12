import React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
  .tk-icon {
    stroke: black;
    stroke-width: 2;
  }
`;

export const Settings = () => {
  return (
    <SVG
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 2H12V3.11282C12 4.65242 13.6667 5.61467 15 4.84487L15.9993 4.26794L17.9993 7.73205L17.0355 8.28847C15.7022 9.05827 15.7022 10.9828 17.0355 11.7526L17.9282 12.268L15.9282 15.7321L15 15.1962C13.6667 14.4264 12 15.3886 12 16.9282V18H8V16.9692C8 15.4296 6.33333 14.4674 5 15.2372L4.14286 15.732L2.14286 12.2679L3.03551 11.7526C4.36885 10.9828 4.36885 9.05827 3.03551 8.28847L2.07178 7.73206L4.07178 4.26795L5 4.80386C6.33333 5.57366 8 4.61141 8 3.07181V2Z"
        className="tk-icon"
      />
      <circle cx="10" cy="10" r="2" className="tk-icon" />
    </SVG>
  );
};

Settings.iconName = 'settings';

export default Settings;
