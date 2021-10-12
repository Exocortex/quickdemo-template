import React from 'react';

import { StepTracker } from './index';

const steps = ['Stictching', 'Chair Back', 'Color', 'Arms', 'Hydraulics'];

export default {
  title: 'Layouts/Step Tracker',
  component: StepTracker,
  argTypes: { handleClick: { action: 'clicked' } },
};

const Template = (args) => <StepTracker {...args} />;

export const Default = Template.bind({});
Default.args = {
  steps,
  active: 3,
};
