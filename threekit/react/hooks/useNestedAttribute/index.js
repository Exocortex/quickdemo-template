import { useSelector, useDispatch } from 'react-redux';
import {
  getNestedAttributes,
  setNestedConfiguration,
} from '../../store/threekit';
import { selectionToConfiguration } from '../../../utils';

const useNestedAttribute = (attributeName) => {
  const dispatch = useDispatch();
  const attributes = useSelector(getNestedAttributes);

  if (!attributes?.length) return [undefined, undefined];

  const attribute = attributes.find((el) => el.name === attributeName);
  if (!attribute) return [undefined, undefined];

  const handleChange = (value) => {
    const preppedValue = selectionToConfiguration(value, attribute.type);
    if (!preppedValue) return;
    dispatch(setNestedConfiguration({ [attributeName]: preppedValue }));
  };

  return [attribute, handleChange];
};

export default useNestedAttribute;
