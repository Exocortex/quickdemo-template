import React from 'react';

const prepAttributes = (attributes) =>
  atob(attributes)
    .split(',')
    .reduce((output, el) => {
      const [key, val] = el.split('::');
      return Object.assign(output, { [key]: val });
    }, {});

const experienceContainer = (WrappedComponent) => (props) => {
  const params = window.location.search.split('?')[1];
  let attributeComponents = {};
  const config = params.split('&').reduce((output, el) => {
    const [key, val] = el.split('=');
    if (key === 'attributes') {
      attributeComponents = prepAttributes(val);
      return output;
    }
    return Object.assign(output, {
      [key]: val,
    });
  }, {});

  return (
    <WrappedComponent
      {...props}
      experience={config.experience}
      config={config}
      attributeComponents={attributeComponents}
    />
  );
};

export default experienceContainer;
