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

export const Cart = () => {
  return (
    <SVG
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.5 15H5.5L6.5 12M1.5 3H3.5L4.16667 5M6.5 12H14.5L17 5H4.16667M6.5 12L4.16667 5"
        className="tk-icon"
        strokeLinecap="round"
      />
      <circle cx="5" cy="16.5" r="1" className="tk-icon thin" />
      <circle cx="15" cy="16.5" r="1" className="tk-icon thin" />
    </SVG>
  );
};

Cart.iconName = 'cart';

export default Cart;
