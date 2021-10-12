import React from 'react';
import { useHistory } from '../../../hooks';

const undoContainer = (WrappedComponent) => (props) => {
  const stepHistory = useHistory();
  const handleClick = () => stepHistory(1);

  return <WrappedComponent {...props} handleClick={handleClick} />;
};

export default undoContainer;
