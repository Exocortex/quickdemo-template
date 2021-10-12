import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './attributeValue.styles';
import container from './attributeValueContainer';
import { generateDisplayClassName as generateClassName } from '../../../../utils';

export const AttributeValue = (props) => {
  const { value, className: customClassName } = Object.assign(
    { value: undefined, className: '' },
    props
  );
  if (!value?.length) return null;

  const cls = generateClassName('attr-value', customClassName);

  return <Wrapper className={cls}>{value}</Wrapper>;
};

AttributeValue.propTypes = {
  /**
   * The attribute's title/label displayed to the user
   */
  attribute: PropTypes.string,
  /**
   * An override value to display instead of the attribute title.
   */
  value: PropTypes.string,
  /**
   * Custom classNames applied to the HTML Element to apply custom CSS styling.
   */
  className: PropTypes.string,
};

AttributeValue.defaultProps = {
  value: undefined,
  className: '',
};

export default container(AttributeValue);
