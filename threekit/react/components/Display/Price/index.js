import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './price.styles';
import container from './priceContainer';
import { generateDisplayClassName as generateClassName } from '../../../../utils';

export const Price = (props) => {
  const { price, className: customClassName } = Object.assign(
    {
      price: undefined,
      className: '',
    },
    props
  );
  if (!price || (typeof price === 'string' && !price?.length)) return null;

  const cls = generateClassName('price', customClassName);

  return <Wrapper className={cls}>{price}</Wrapper>;
};

Price.propTypes = {
  /**
   * The price displayed to the user
   */
  price: PropTypes.string,
  /**
   * Custom classNames applied to the HTML Element to apply custom CSS styling.
   */
  className: PropTypes.string,
};

Price.defaultProps = {
  price: undefined,
  className: '',
};

export default container(Price);
