import React, { useState } from 'react';
import { message } from 'antd';
import { useThreekitInitStatus } from '../../../hooks';

export const shareEmailContainer = (WrappedComponent) => (props) => {
  const hasLoaded = useThreekitInitStatus();
  const [show, setShow] = useState(false);

  if (!hasLoaded) return null;

  const onSend = async (data) => {
    const preppedData = Object.assign(
      data,
      props.from ? { from: props.from } : {}
    );
    await window.threekit.controller.shareEmailConfiguration(preppedData);
    message.success('e-mail sent');
    setShow(false);
  };

  return (
    <WrappedComponent
      {...props}
      onSend={onSend}
      show={show}
      setShow={setShow}
    />
  );
};

export default shareEmailContainer;
