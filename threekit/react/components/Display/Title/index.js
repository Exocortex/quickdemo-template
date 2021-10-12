import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './title.styles';
import container from './titleContainer';
import { generateDisplayClassName as generateClassName } from '../../../../utils';

export const Title = (props) => {
  const { title, className: customClassName, align } = Object.assign(
    { title: undefined, className: '', align: 'left' },
    props
  );
  if (!title?.length) return null;

  const cls = generateClassName('title', customClassName);

  return (
    <Wrapper align={align} className={cls}>
      {title}
    </Wrapper>
  );
};

Title.propTypes = {
  /**
   * The title displayed to the user
   */
  title: PropTypes.string,
  /**
   * Custom classNames applied to the HTML Element to apply custom CSS styling.
   */
  className: PropTypes.string,
  /**
   * The CSS Text alignment property. Options: 'left' | 'center' | 'right'
   */
  align: PropTypes.string,
};

Title.defaultProps = {
  title: undefined,
  className: '',
  align: 'left',
};

export default container(Title);
