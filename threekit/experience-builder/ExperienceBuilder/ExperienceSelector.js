import React from 'react';
import {
  ExperienceSelectorWrapper,
  ClickableSpan,
} from './experienceBuilder.styles';
import { Card } from 'antd';
import experiences from '../experiences';

export const ExperienceSelector = (props) => {
  const { onContinue } = props;

  const handleClick = (value) => onContinue(value);

  return (
    <ExperienceSelectorWrapper>
      {Object.entries(experiences).map(([key, el]) => (
        <Card
          key={key}
          title={el.title}
          hoverable
          extra={
            <ClickableSpan onClick={() => handleClick(key)}>
              Select
            </ClickableSpan>
          }
        >
          {el.description}
        </Card>
      ))}
    </ExperienceSelectorWrapper>
  );
};

export default ExperienceSelector;
