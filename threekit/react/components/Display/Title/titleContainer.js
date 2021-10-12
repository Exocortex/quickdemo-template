import React from 'react';
import { useName } from '../../../hooks';

const titleContainer = (WrappedComponent) => (props) => {
  const name = useName();
  const title = props.title || name;
  if (!title) return null;
  return <WrappedComponent title={title} />;
};

export default titleContainer;
