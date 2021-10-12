import React from 'react';
import 'antd/dist/antd.css';

import { LanguageSelector } from './index';

const options = ['English', 'German', 'French', 'Spanish'].map((el) => ({
  label: el,
  value: el,
}));

export default {
  title: 'Widgets/Language Selector',
  component: LanguageSelector,
  //   argTypes: { handleClick: { action: 'clicked' } },
};

const Template = (args) => <LanguageSelector {...args} />;

export const Default = Template.bind({});
Default.args = {
  options,
  selected: options[1].value,
};
