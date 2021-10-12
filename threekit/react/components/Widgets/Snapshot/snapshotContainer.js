import React from 'react';
import { SNAPSHOT_OUTPUTS } from '../../../../constants';
import { useThreekitInitStatus } from '../../../hooks';

const snapshotContainer = (WrappedComponent) => (props) => {
  const hasLoaded = useThreekitInitStatus();
  if (!hasLoaded) return null;

  const handleClick = () => {
    const config = Object.assign(
      {},
      props.config,
      { output: SNAPSHOT_OUTPUTS.download },
      props.filename ? { filename: props.filename } : {},
      props.format ? { format: props.format } : {}
    );
    window.threekit.controller.takeSnapshots(props.cameras, config);
  };

  return <WrappedComponent {...props} handleClick={handleClick} />;
};

export default snapshotContainer;
