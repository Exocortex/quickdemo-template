import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './attributeTitle.styles';
import container from './attributeTitleContainer';
import { generateDisplayClassName as generateClassName } from '../../../../utils';

export const AttributeTitle = (props) => {
  const { title, className: customClassName } = Object.assign(
    { title: undefined, className: '' },
    props
  );
  if (!title?.length) return null;

  const cls = generateClassName('attr-title', customClassName, title);

  return <Wrapper className={cls}>{title}</Wrapper>;
};

AttributeTitle.propTypes = {
  /**
   * The attribute's title/label displayed to the user
   */
  attribute: PropTypes.string,
  /**
   * An override value to display instead of the attribute title.
   */
  title: PropTypes.string,
  /**
   * Custom classNames applied to the HTML Element to apply custom CSS styling.
   */
  className: PropTypes.string,
};

AttributeTitle.defaultProps = {
  title: undefined,
  className: '',
};

export default container(AttributeTitle);
