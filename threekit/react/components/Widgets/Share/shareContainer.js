import React from 'react';
import { copyToClipboard } from '../../../../utils';
import { message } from 'antd';
import { useThreekitInitStatus } from '../../../hooks';

const shareContainer = (WrappedComponent) => (props) => {
  const hasLoaded = useThreekitInitStatus();
  if (!hasLoaded) return null;

  const handleClick = async () => {
    const configuration = await window.threekit.controller.saveConfiguration();
    copyToClipboard(configuration.resumableUrl);
    message.success('Link copied!');
  };

  return <WrappedComponent {...props} handleClick={handleClick} />;
};

export default shareContainer;
