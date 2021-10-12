const useZoom = () => {
  const zoomIn = (step) =>
    window.threekit.player.camera.zoom(Math.abs(step) || 1);
  const zoomOut = (step) =>
    window.threekit.player.camera.zoom(step ? -1 * Math.abs(step) : -1);

  return [zoomIn, zoomOut];
};

export default useZoom;
