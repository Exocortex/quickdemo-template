import React from 'react';
import 'antd/dist/antd.css';

import { Share } from './index';

export default {
  title: 'Widgets/Share',
  component: Share,
  //   argTypes: { handleClick: { action: 'clicked' } },
};

const Template = (args) => <Share {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithTitle = Template.bind({});
WithTitle.args = { showLabel: true };
