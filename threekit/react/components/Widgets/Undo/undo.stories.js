import React from 'react';
import 'antd/dist/antd.css';

import { Undo } from './index';

export default {
  title: 'Widgets/Undo',
  component: Undo,
  //   argTypes: { handleClick: { action: 'clicked' } },
};

const Template = (args) => <Undo {...args} />;

export const Default = Template.bind({});
Default.args = {};
