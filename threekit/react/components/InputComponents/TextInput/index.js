import React from 'react';
import PropTypes from 'prop-types';
import { Input } from './textInput.styles';
import {
  InputComponentWrapper as Wrapper,
  InputComponentDescription as Description,
  InputComponentTitle as Title,
} from '../inputComponents.styles';
import { regularToKebabCase } from '../../../../utils';
import { ATTRIBUTE_TYPES } from '../../../../constants';
import defaultClassName, { classPrefix } from '../classNames';

export const TextInput = (props) => {
  const {
    title,
    description,
    attribute,
    className: classNameRaw,
    value,
    handleChange,
    isPlayerLoading,
    disabled,
  } = Object.assign({}, props);

  let className = `${defaultClassName}-text-input`;
  if (attribute) className += ` ${regularToKebabCase(attribute)}`;
  else if (title) className += ` ${regularToKebabCase(title)}`;
  if (classNameRaw) className += ` ${classNameRaw}`;
  className += ` ${classPrefix}-text-input`;

  return (
    <Wrapper className={`${className}-component`}>
      {title ? <Title className={`${className}-header`}>{title}</Title> : null}
      {description ? (
        <Description className={`${className}-description`}>
          {description}
        </Description>
      ) : null}
      <Input
        type="text"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        isPlayerLoading={isPlayerLoading}
        disabled={disabled}
      />
    </Wrapper>
  );
};

TextInput.defaultProps = {
  attribute: undefined,
  title: undefined,
  className: undefined,
  value: undefined,
  hideDisabled: undefined,
  handleChange: undefined,
};

TextInput.compatibleAttributes = new Set([ATTRIBUTE_TYPES.string]);

export default TextInput;
