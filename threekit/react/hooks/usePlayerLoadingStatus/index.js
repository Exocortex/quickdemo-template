import { useSelector } from 'react-redux';
import { isPlayerLoading } from '../../store/threekit';

const usePlayerLoadingStatus = () => useSelector(isPlayerLoading);

export default usePlayerLoadingStatus;
