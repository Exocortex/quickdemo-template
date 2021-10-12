import React from 'react';

import { Swatch as SwatchComponent } from './index';

const options = [
  {
    label: 'Celtic',
    value: 'celtic',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/thumb/3/35/Celtic_FC.svg/1200px-Celtic_FC.svg.png',
  },
  {
    label: 'Arsenal',
    value: 'arsenal',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg',
  },
  {
    label: 'Dortmund',
    value: 'dortmund',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Borussia_Dortmund_logo.svg/1200px-Borussia_Dortmund_logo.svg.png',
  },
  {
    label: 'Ajax',
    value: 'ajax',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/thumb/7/79/Ajax_Amsterdam.svg/1200px-Ajax_Amsterdam.svg.png',
  },
];

export default {
  title: 'Input Components/Swatch',
  component: SwatchComponent,
  argTypes: { handleClick: { action: 'clicked' } },
};

const Template = (args) => <SwatchComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  options,
};

export const Selected = Template.bind({});
Selected.args = {
  options,
  selected: options[1].value,
};

export const WithTitle = Template.bind({});
WithTitle.args = {
  title: 'Swatch Title',
  options,
  selected: options[1].value,
};
