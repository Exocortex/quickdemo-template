import React from 'react';
import container from './experienceContainer';
import experiences from '../experiences';

export const Experience = (props) => {
  const { experience, config, attributeComponents } = props;

  if (!Object.keys(experiences).includes(experience))
    return <div>{experience} experience not found.</div>;

  const { Component } = experiences[experience];

  switch (experience) {
    case experiences['ordinal-interactive'].id:
      return (
        <Component
          config={config}
          attributesArrayComponent={config.arrayAttributeComponent}
          attributesArrayLabel={config.arrayAttribute}
          display={config.display}
        />
      );
    case experiences['single-product'].id:
      return (
        <Component
          form="basic"
          config={config}
          attributeComponents={attributeComponents}
        />
      );
    case experiences['single-product-stepped'].id:
      return (
        <Component
          form="stepped"
          config={config}
          attributeComponents={attributeComponents}
        />
      );
    case experiences['single-product-interactive'].id:
      return (
        <Component
          form="basic"
          interactive
          config={config}
          attributeComponents={attributeComponents}
        />
      );
    case experiences['single-product-animated'].id:
      return (
        <Component
          form="stepped"
          animated
          config={config}
          attributeComponents={attributeComponents}
        />
      );
  }
};

export default container(Experience);
