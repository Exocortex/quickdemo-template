import React from 'react';
import PropTypes from 'prop-types';
import {
  SwatchWrapper as Wrapper,
  SwatchContent as Content,
  SwatchOption as Option,
} from './swatch.styles';
import {
  InputComponentTitle as Title,
  InputComponentDescription as Description,
} from '../inputComponents.styles';
import { regularToKebabCase } from '../../../../utils';
import { ATTRIBUTE_TYPES } from '../../../../constants';
import defaultClassName, { classPrefix } from '../classNames';

export const Swatch = (props) => {
  const {
    attribute,
    title,
    description,
    options,
    className: classNameRaw,
    handleClick,
    selected,
    hideDisabled,
    isPlayerLoading,
  } = props;

  let className = `${defaultClassName}-swatch`;
  if (attribute) className += ` ${regularToKebabCase(attribute)}`;
  else if (title) className += ` ${regularToKebabCase(title)}`;
  if (classNameRaw) className += ` ${classNameRaw}`;
  className += ` ${classPrefix}-swatch`;

  return (
    <Wrapper className={`${className}-component`}>
      {title && <Title className={`${className}-header`}>{title}</Title>}
      {description ? (
        <Description className={`${className}-description`}>
          {description}
        </Description>
      ) : null}
      <Content className={`${className}-content`}>
        {options.map((option, i) => {
          if (option.disabled && hideDisabled) return null;
          let cls = `${className}-option option-${i + 1} ${option.value}`;
          if (option.value === selected) cls += ` selected`;
          return (
            <Option
              key={i}
              className={cls}
              onClick={() => handleClick(option.value)}
              color={option.colorValue}
              isPlayerLoading={isPlayerLoading}
              selected={option.value === selected}
            >
              <div>
                <div className={`${cls} option-icon`}>
                  {option.imageUrl && (
                    <img src={option.imageUrl} alt={option.label} />
                  )}
                </div>
                {option.label && (
                  <div className={`${cls} option-label`}>{option.label}</div>
                )}
              </div>
            </Option>
          );
        })}
      </Content>
    </Wrapper>
  );
};

Swatch.propTypes = {
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
      colorValue: PropTypes.string,
      imageUrl: PropTypes.string,
    })
  ),
};

Swatch.defaultProps = {
  attribute: undefined,
  title: undefined,
  className: undefined,
  selected: undefined,
  hideDisabled: undefined,
  handleClick: undefined,
  options: [],
};

Swatch.compatibleAttributes = new Set([ATTRIBUTE_TYPES.asset]);

export default Swatch;
