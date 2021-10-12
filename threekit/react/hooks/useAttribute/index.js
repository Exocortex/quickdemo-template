import { useSelector, useDispatch } from 'react-redux';
import { getAttributes, setConfiguration } from '../../store/threekit';
import { selectionToConfiguration } from '../../../utils';

const useAttribute = (attribute) => {
  const dispatch = useDispatch();
  const attributeData = useSelector(getAttributes(attribute));

  if (!attribute) return [undefined, undefined];
  if (!attributeData || !Object.keys(attributeData).length)
    return [undefined, undefined];

  const handleChange = (value) => {
    const preppedValue = selectionToConfiguration(value, attributeData.type);
    if (!preppedValue) return;
    dispatch(setConfiguration({ [attribute]: preppedValue }));
  };

  return [attributeData, handleChange];
};

export default useAttribute;
