import React from 'react';

import { Buttons } from './index';

const options = [
  {
    label: 'Celtic',
    value: 'celtic',
  },
  {
    label: 'Arsenal',
    value: 'arsenal',
  },
  {
    label: 'Dortmund',
    value: 'dortmund',
  },
  {
    label: 'Ajax',
    value: 'ajax',
  },
];

export default {
  title: 'Input Components/Buttons',
  component: Buttons,
  argTypes: { handleClick: { action: 'clicked' } },
};

const Template = (args) => <Buttons {...args} />;

export const Default = Template.bind({});
Default.args = {
  options,
};

export const Selected = Template.bind({});
Selected.args = {
  options,
  selected: options[1].value,
};

export const WithTitle = Template.bind({});
WithTitle.args = {
  title: 'Radio Buttons Title',
  options,
  selected: options[1].value,
};
