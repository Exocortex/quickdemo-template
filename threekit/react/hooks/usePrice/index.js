import { useSelector } from 'react-redux';
import { getPrice } from '../../store/threekit';

const usePrice = () => useSelector(getPrice);

export default usePrice;
