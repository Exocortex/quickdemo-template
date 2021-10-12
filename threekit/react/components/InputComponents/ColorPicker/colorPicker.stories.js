import React from 'react';
import 'antd/dist/antd.css';

import { ColorPicker } from './index';

const options = [
  { label: 'Blue', value: 'blue', colorValue: '#f44336' },
  { label: 'Green', value: 'green', colorValue: '#2196f3' },
  { label: 'Red', value: 'red', colorValue: '#009688' },
  { label: 'Yellow', value: 'yellow', colorValue: '#cddc39' },
];

export default {
  title: 'Input Components/Color Picker',
  component: ColorPickerComponent,
  argTypes: { handleClick: { action: 'clicked' } },
};

const Template = (args) => <ColorPicker {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithOptions = Template.bind({});
WithOptions.args = {
  options,
};
