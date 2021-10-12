import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  DropdownMain as Main,
  DropdownWrapper as Wrapper,
  DropdownOptions as Options,
  DropdownOptionsContent as OptionsContent,
  DropdownOption as Option,
} from './dropdown.styles';
import {
  InputComponentTitle as Title,
  InputComponentDescription as Description,
} from '../inputComponents.styles';
import { DownOutlined } from '@ant-design/icons';
import { regularToKebabCase } from '../../../../utils';
import { ATTRIBUTE_TYPES } from '../../../../constants';
import defaultClassName, { classPrefix } from '../classNames';

export const Dropdown = (props) => {
  const {
    attribute,
    title,
    description,
    placeholder,
    options,
    className: classNameRaw,
    handleClick: onClick,
    selected,
    hideDisabled,
    isPlayerLoading,
  } = props;
  const [hide, setHide] = useState(true);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!ref.current.contains(e.target)) setHide(true);
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [hide, ref]);

  const handleClick = (value) => {
    onClick(value);
    setHide(true);
  };

  let className = `${defaultClassName}-dropdown`;
  if (attribute) className += ` ${regularToKebabCase(attribute)}`;
  else if (title) className += ` ${regularToKebabCase(title)}`;
  if (classNameRaw) className += ` ${classNameRaw}`;
  className += ` ${classPrefix}-dropdown`;

  const selectedOpt = options.find((el) => el.value === selected);

  return (
    <div className={`${className}-component`}>
      {title ? <Title className={`${className}-header`}>{title}</Title> : null}
      {description ? (
        <Description className={`${className}-description`}>
          {description}
        </Description>
      ) : null}
      <Wrapper
        isLoading={isPlayerLoading}
        active={!hide}
        ref={ref}
        className={`${className}-dropdown`}
      >
        <Main
          active={!hide}
          className={`${className}-main`}
          onClick={() => setHide(!hide)}
          hasPlaceholder={!selected && !!placeholder}
        >
          <div className={`tk-dropdown-selected ${className}`}>
            {selectedOpt?.name || selectedOpt?.label || placeholder || ''}
          </div>
          <div className={`${className}-caret`}>
            <DownOutlined />
          </div>
        </Main>
        <Options hide={hide}>
          <OptionsContent className={`${className}-content`}>
            {options.map((option, i) => {
              if (option.disabled && hideDisabled) return null;
              let cls = `${className}-option option-${i + 1} ${option.value}`;
              if (option.value === selected) cls += ` selected`;
              return (
                <Option
                  key={i}
                  className={cls}
                  selected={selected === option.value}
                  onClick={() => handleClick(option.value)}
                >
                  <div>{option.label}</div>
                </Option>
              );
            })}
          </OptionsContent>
        </Options>
      </Wrapper>
    </div>
  );
};

Dropdown.propTypes = {
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
  placeholder: PropTypes.string,
  /**
   * Used to display a placeholder on the Dropdown when no value is selected
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

Dropdown.defaultProps = {
  attribute: undefined,
  title: undefined,
  placholder: undefined,
  className: undefined,
  selected: undefined,
  hideDisabled: undefined,
  handleClick: undefined,
  options: [],
};

Dropdown.compatibleAttributes = new Set([
  ATTRIBUTE_TYPES.asset,
  ATTRIBUTE_TYPES.string,
  ATTRIBUTE_TYPES.arraySelector,
]);

export default Dropdown;
