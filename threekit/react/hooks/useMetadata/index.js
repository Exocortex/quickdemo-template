import { useSelector } from 'react-redux';
import { getMetadata } from '../../store/threekit';

const useMetadata = () => {
  const metadata = useSelector(getMetadata);
  return metadata;
};

export default useMetadata;
