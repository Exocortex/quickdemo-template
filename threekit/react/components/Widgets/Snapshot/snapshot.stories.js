import React from 'react';
import 'antd/dist/antd.css';

import { Snapshot } from './index';

export default {
  title: 'Widgets/Snapshot',
  component: Snapshot,
  //   argTypes: { handleClick: { action: 'clicked' } },
};

const Template = (args) => <Snapshot {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithTitle = Template.bind({});
WithTitle.args = { showLabel: true };
