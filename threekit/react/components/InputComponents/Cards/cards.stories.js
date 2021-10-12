import React from 'react';

import { Cards } from './index';

const props = {
  title: 'Card Attribute Title',
  options: [
    {
      name: 'Celtic',
      description: 'This is bob',
      price: 50,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/en/thumb/3/35/Celtic_FC.svg/1200px-Celtic_FC.svg.png',
    },
    {
      name: 'Arsenal',
      description: 'This is bob',
      price: 50,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg',
    },
    {
      name: 'Dortmund',
      description: 'This is bob',
      price: 50,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Borussia_Dortmund_logo.svg/1200px-Borussia_Dortmund_logo.svg.png',
    },
  ],
};

export default {
  title: 'Input Components/Cards',
  component: Cards,
  argTypes: { onClick: { action: 'clicked' } },
};

const Template = (args) => <Cards {...args} />;

export const Default = Template.bind({});
Default.args = props;
