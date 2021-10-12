import React from 'react';

import { Accordion } from './index';
const { AccordionItem } = Accordion;

const items = [
  {
    label: 'First Section',
    content: 'This is some content in the first section',
  },
  {
    label: 'Second Section',
    content: 'This is different content for a different section',
  },
];

export default {
  title: 'Layouts/Accordion',
  component: Accordion,
};

const Template = (args) => (
  <Accordion {...args}>
    {items.map((el, i) => (
      <AccordionItem key={i} label={el.label}>
        {el.content}
      </AccordionItem>
    ))}
  </Accordion>
);

export const Primary = Template.bind({});
