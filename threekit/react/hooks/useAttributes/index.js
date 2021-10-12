import { useSelector, useDispatch } from 'react-redux';
import { getAttributes, setConfiguration } from '../../store/threekit';

const useAttributes = () => {
  const dispatch = useDispatch();
  const attributesData = useSelector(getAttributes());

  if (!attributesData) return [undefined, undefined];

  const handleChange = (configuration) =>
    dispatch(setConfiguration(configuration));

  return [attributesData, handleChange];
};

export default useAttributes;
