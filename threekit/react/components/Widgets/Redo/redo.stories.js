import React from 'react';
import 'antd/dist/antd.css';

import { Redo } from './index';

export default {
  title: 'Widgets/Redo',
  component: Redo,
  //   argTypes: { handleClick: { action: 'clicked' } },
};

const Template = (args) => <Redo {...args} />;

export const Default = Template.bind({});
Default.args = {};
