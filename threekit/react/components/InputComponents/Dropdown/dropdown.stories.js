import React from 'react';
import 'antd/dist/antd.css';

import { Dropdown } from './index';

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
  title: 'Input Components/Dropdown',
  component: Dropdown,
  argTypes: { handleClick: { action: 'clicked' } },
};

const Template = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  options,
  placeholder: 'Select a color!',
};

export const Selected = Template.bind({});
Selected.args = {
  options,
  placeholder: 'Select a color!',
  selected: options[1].value,
};

export const WithTitle = Template.bind({});
WithTitle.args = {
  title: 'Dropdown Title',
  options,
  placeholder: 'Select a color!',
  selected: options[1].value,
};
