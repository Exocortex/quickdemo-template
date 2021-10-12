import React from 'react';

import { Steps } from './index';
const { StepPane } = Steps;

const steps = [
  {
    label: 'First Step',
    content: 'This is some content in the first section',
  },
  {
    label: 'Second Step',
    content: 'This is different content for a different section',
  },
  {
    label: 'Third Step',
    content: 'This is some content in the first section',
  },
  {
    label: 'Forth Step',
    content: 'This is different content for a different section',
  },
];

export default {
  title: 'Layouts/Steps',
  component: Steps,
};

const Template = (args) => (
  <Steps {...args}>
    {steps.map((el, i) => (
      <StepPane key={i} label={el.label}>
        {el.content}
      </StepPane>
    ))}
  </Steps>
);

export const Primary = Template.bind({});
