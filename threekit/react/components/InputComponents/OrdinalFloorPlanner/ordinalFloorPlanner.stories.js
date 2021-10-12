import React from 'react';

import { OrdinalFloorPlannerComponent as FloorPlanner } from './index';

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
  title: 'Input Components/Ordinal Floor Planner',
  component: FloorPlanner,
  //   argTypes: { onClick: { action: 'clicked' } },
};

const Template = (args) => <FloorPlanner {...args} />;

export const Default = Template.bind({});
Default.args = props;
