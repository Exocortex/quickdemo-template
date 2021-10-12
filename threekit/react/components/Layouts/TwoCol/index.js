import React from 'react';
import { Wrapper } from './twoCol.styles';

export const TwoCol = (props) => {
  const { columnGap, width, leftSize, rightSize, className } = Object.assign(
    {
      width: '100%',
      columnGap: '15px',
      leftSize: '60%',
      rightSize: '40%',
      className: '',
    },
    props
  );
  return (
    <Wrapper
      className={`tk-two-cols ${className}`}
      columnGap={columnGap}
      width={width}
      leftSize={leftSize}
      rightSize={rightSize}
    >
      {props.children}
    </Wrapper>
  );
};

export default TwoCol;
