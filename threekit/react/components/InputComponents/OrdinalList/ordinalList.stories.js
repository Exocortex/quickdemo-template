import React from 'react';

import { OrdinalListComponent as OrdinalList, OrdinalListItem } from './index';

const props = {
  title: 'Attribute Title',
  items: [
    {
      name: 'Celtic',
      description: 'This is a description for the item.',
    },
    {
      name: 'Arsenal',
    },
    {
      name: 'Dortmund',
    },
    {
      name: 'Ajax',
    },
  ],
};

export default {
  title: 'Input Components/Ordinal List',
  component: OrdinalList,
  argTypes: { handleClick: { action: 'clicked' } },
};

const Template = (args) => <OrdinalList {...args} />;

export const Default = Template.bind({});
Default.args = props;
