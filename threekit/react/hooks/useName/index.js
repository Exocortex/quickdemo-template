import { useSelector } from 'react-redux';
import { getName } from '../../store/threekit';

const useName = () => useSelector(getName);

export default useName;
