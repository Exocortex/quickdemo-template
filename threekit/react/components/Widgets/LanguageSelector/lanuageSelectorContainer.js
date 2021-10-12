import React from 'react';
import { useLanguages } from '../../../hooks';

const languageSelectorContainer = (WrappedComponent) => (props) => {
  const [selected, options, handleChange] = useLanguages();

  return (
    <WrappedComponent
      {...props}
      selected={selected}
      options={options.map((el) => ({ value: el, label: el }))}
      handleChange={handleChange}
    />
  );
};

export default languageSelectorContainer;
