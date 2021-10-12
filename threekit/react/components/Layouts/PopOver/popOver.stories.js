import React from 'react';
import 'antd/dist/antd.css';

import { PopOver } from './index';

export default {
  title: 'Widgets/Pop-over',
  component: PopOver,
  //   argTypes: { handleClick: { action: 'clicked' } },
};

const Template = (args) => <PopOver {...args} />;

export const Default = Template.bind({});
Default.args = {
  position: 'bottom-left',
};
