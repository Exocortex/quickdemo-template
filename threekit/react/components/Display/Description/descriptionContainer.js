import React from 'react';
import { useMetadata } from '../../../hooks';

const descriptionContainer = (WrappedComponent) => (props) => {
  const metadata = useMetadata();
  const description =
    props.description || props.value || metadata?._description;
  if (!description) return null;
  return <WrappedComponent description={description} />;
};

export default descriptionContainer;
