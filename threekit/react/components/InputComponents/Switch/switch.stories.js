import React from 'react';

import { Switch } from './index';

const value = true;

export default {
  title: 'Input Components/Switch',
  component: Switch,
};

const Template = (args) => <Switch {...args} />;

export const Default = Template.bind({});
Default.args = {
  value,
};
