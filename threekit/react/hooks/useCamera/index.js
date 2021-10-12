import useAttribute from '../useAttribute';
import { ATTRIBUTES_RESERVED } from '../../../constants';

const useCamera = (cameraAttribute = ATTRIBUTES_RESERVED.camera) =>
  useAttribute(cameraAttribute);

export default useCamera;
