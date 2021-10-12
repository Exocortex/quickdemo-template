import { useDispatch } from 'react-redux';
import { stepHistory } from '../../store/threekit';

const useHistory = () => {
  const dispatch = useDispatch();
  return (step) => dispatch(stepHistory(step));
};

export default useHistory;
