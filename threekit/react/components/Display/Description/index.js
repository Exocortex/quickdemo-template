import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './description.styles';
import container from './descriptionContainer';
import { generateDisplayClassName as generateClassName } from '../../../../utils';

export const Description = (props) => {
  const { description, className: customClassName } = Object.assign(
    {
      description: undefined,
      className: '',
    },
    props
  );
  if (!description?.length) return null;

  const cls = generateClassName('description', customClassName);

  return <Wrapper className={cls}>{description}</Wrapper>;
};

Description.propTypes = {
  /**
   * The description displayed to the user
   */
  description: PropTypes.string,
  /**
   * Custom classNames applied to the HTML Element to apply custom CSS styling.
   */
  className: PropTypes.string,
};

Description.defaultProps = {
  description: undefined,
  className: '',
};

export default container(Description);
