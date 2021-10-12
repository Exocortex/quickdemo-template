import React from 'react';
import { Wrapper, Item, ItemCircle } from './stepTracker.styles';

export const StepTracker = (props) => {
  const { steps, active } = Object.assign({}, { steps: [], active: 0 }, props);
  if (!steps.length) return null;

  return (
    <Wrapper>
      <div>
        {steps.map((el, i) => (
          <Item
            key={i}
            active={active === i}
            complete={i < active}
            isFirst={i === 0}
            isLast={i === steps.length - 1}
          >
            <div>{el}</div>
            <div>
              <div />
              <ItemCircle>
                <div>{i}</div>
              </ItemCircle>
              <div />
            </div>
          </Item>
        ))}
      </div>
    </Wrapper>
  );
};

export default StepTracker;
