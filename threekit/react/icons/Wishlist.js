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

export const Wishlist = () => {
  return (
    <SVG
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.8957 13.7968L7.5 14.2551L8.1043 13.7968C8.25006 13.6862 8.39484 13.5766 8.53838 13.4679C9.91719 12.4242 11.1826 11.4662 12.1195 10.5709C13.1179 9.61672 14 8.5034 14 7.19388C14 6.19651 13.5468 5.39625 12.881 4.85625C12.237 4.33387 11.4148 4.06569 10.6129 4.01081C9.57321 3.93966 8.35876 4.23439 7.49721 5.02706C7.01502 4.58358 6.42482 4.29279 5.82541 4.13958C4.71406 3.85551 3.44327 4.00302 2.47292 4.60486C1.63327 5.12564 1 6.0103 1 7.19385C1 8.23835 1.56102 9.14558 2.25247 9.92375C3.22593 11.0193 4.75751 12.1783 6.44156 13.4528C6.59182 13.5665 6.74329 13.6812 6.8957 13.7968Z"
        className="tk-icon"
      />
      <path d="M6 15.5H14M14 12.5H9M14 4.5L6 4.5" className="tk-icon thin" />
    </SVG>
  );
};

Wishlist.iconName = 'wishlist';

export default Wishlist;
