import React from 'react';
import PropTypes from 'prop-types';
import { ButtonsWrapper } from './buttons.styles';
import {
  InputComponentWrapper as Wrapper,
  ButtonWrapper,
  InputComponentTitle as Title,
  InputComponentDescription as Description,
} from '../inputComponents.styles';
import { regularToKebabCase } from '../../../../utils';
import { ATTRIBUTE_TYPES } from '../../../../constants';
import defaultClassName, { classPrefix } from '../classNames';

export const Buttons = (props) => {
  const {
    attribute,
    title,
    description,
    options,
    selected,
    className: classNameRaw,
    hideDisabled,
    handleClick,
    isPlayerLoading,
  } = props;

  let className = `${defaultClassName}-buttons`;
  if (attribute) className += ` ${regularToKebabCase(attribute)}`;
  else if (title) className += ` ${regularToKebabCase(title)}`;
  if (classNameRaw) className += ` ${classNameRaw}`;
  className += ` ${classPrefix}-buttons`;

  return (
    <Wrapper className={`${className}-component`}>
      {title ? <Title className={`${className}-header`}>{title}</Title> : null}
      {description ? (
        <Description className={`${className}-description`}>
          {description}
        </Description>
      ) : null}
      <ButtonsWrapper className={`${className}-content`}>
        {options.map((option, i) => {
          if (option.disabled && hideDisabled) return null;
          let cls = `${className}-option option-${i + 1} ${option.value}`;
          if (option.value === selected) cls += ` selected`;
          return (
            <ButtonWrapper
              className={cls}
              key={i}
              isPlayerLoading={isPlayerLoading}
              disabled={option.disabled}
              selected={option.value === selected}
              onClick={() => handleClick(option.value)}
            >
              <div>{option.label}</div>
            </ButtonWrapper>
          );
        })}
      </ButtonsWrapper>
    </Wrapper>
  );
};

Buttons.propTypes = {
  /**
   * Is the attribute name on the initialized asset that we are
   * using this component for
   */
  attribute: PropTypes.string,
  /**
   * Used to add a title to the input
   */
  title: PropTypes.string,
  /**
   * Used to add a custom class name to each of the components html elements
   */
  className: PropTypes.string,
  /**
   * Selected value from the option set. Should match the 'value' property
   * of one of the items in the options array.
   */
  selected: PropTypes.string,
  /**
   * NOTE: Input wide hide disabled will be deprecated in favour of option
   * specific control of both 'disabled' and 'visible'.
   *
   * Used to hide the options that have the 'disabled' equal to true.
   */
  hideDisabled: PropTypes.bool,
  /**
   * Change handler function. Passes on the 'value' property of the option
   * selected by the user to the function.
   */
  handleClick: PropTypes.func,
  /**
   * The options set to be displayed for the user
   */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
      disabled: PropTypes.bool,
    })
  ),
};

Buttons.defaultProps = {
  attribute: undefined,
  title: undefined,
  className: undefined,
  selected: undefined,
  hideDisabled: undefined,
  handleClick: undefined,
  options: [],
};

Buttons.compatibleAttributes = new Set([
  ATTRIBUTE_TYPES.asset,
  ATTRIBUTE_TYPES.string,
  ATTRIBUTE_TYPES.arraySelector,
]);

export default Buttons;
