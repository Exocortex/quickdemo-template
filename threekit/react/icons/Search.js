import React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
  .tk-icon {
    stroke: black;
    stroke-width: 2;
  }
`;

export const Search = () => {
  return (
    <SVG
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.75737 12.2427C10.1005 14.5858 13.8995 14.5858 16.2427 12.2427C18.5858 9.89951 18.5858 6.10052 16.2427 3.75737C13.8995 1.41423 10.1005 1.41423 7.75737 3.75737C5.41422 6.10052 5.41422 9.89951 7.75737 12.2427ZM7.75737 12.2427L5.9896 14.0104M5.9896 14.0104C6.34316 14.364 6.34316 14.364 5.9896 14.7175C5.63605 15.0711 3.51473 17.1924 3.16118 17.546C2.80762 17.8995 2.80762 17.8995 2.45407 17.546C2.10052 17.1924 2.10052 17.1924 2.45407 16.8389C2.80762 16.4853 4.92894 14.364 5.2825 14.0104C5.63605 13.6569 5.63605 13.6569 5.9896 14.0104Z"
        className="tk-icon"
      />
    </SVG>
  );
};

Search.iconName = 'search';

export default Search;
