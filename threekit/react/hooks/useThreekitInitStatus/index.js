import { useSelector } from 'react-redux';
import { isThreekitLoaded } from '../../store/threekit';

const useThreekitInitStatus = () => useSelector(isThreekitLoaded);

export default useThreekitInitStatus;
