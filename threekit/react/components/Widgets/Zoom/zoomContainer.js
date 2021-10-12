import React from 'react';
import { useZoom, useThreekitInitStatus } from '../../../hooks';

const zoomContainer = (WrappedComponent) => (props) => {
  const hasLoaded = useThreekitInitStatus();
  const [zoomIn, zoomOut] = useZoom();
  if (!hasLoaded) return null;

  return <WrappedComponent {...props} zoomIn={zoomIn} zoomOut={zoomOut} />;
};

export default zoomContainer;
