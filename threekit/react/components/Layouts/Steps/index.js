import React, { useState } from 'react';
import { Wrapper, ActionArea, Content } from './steps.styles';
import { ButtonWrapper } from '../../InputComponents/inputComponents.styles';
import StepTracker from '../StepTracker';

const StepPane = ({ children }) => children;

export const Steps = ({ children }) => {
  const [selected, setSelected] = useState(0);

  let stepContent;

  const steps = React.Children.map(children, (child, idx) => {
    if (child.type !== StepPane) return null;
    if (selected === idx) stepContent = child;
    return child.props.label;
  });

  const handleChangeStep = (delta) =>
    selected + delta > steps.length - 1 || selected + delta < 0
      ? undefined
      : setSelected(selected + delta);

  return (
    <Wrapper>
      <StepTracker steps={steps} active={selected} />
      <Content>{stepContent}</Content>
      <ActionArea>
        {selected == 0 ? (
          <div />
        ) : (
          <ButtonWrapper onClick={() => handleChangeStep(-1)}>
            <div>
              {'<<'} {steps?.[selected - 1]}
            </div>
          </ButtonWrapper>
        )}
        {selected === steps.length - 1 ? null : (
          <ButtonWrapper onClick={() => handleChangeStep(+1)}>
            <div>
              {steps?.[selected + 1]} {'>>'}
            </div>
          </ButtonWrapper>
        )}
      </ActionArea>
    </Wrapper>
  );
};

Steps.StepPane = StepPane;

export default Steps;
