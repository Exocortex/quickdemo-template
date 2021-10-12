import React from 'react';
import { useAttribute } from '../../../hooks';

const attributeTitleContainer = (WrappedComponent) => (props) => {
  if (!props.attribute) return <WrappedComponent {...props} />;
  const [attributeData] = useAttribute(props.attribute);
  if (!attributeData) return null;
  return <WrappedComponent title={title} />;
};

export default attributeTitleContainer;
