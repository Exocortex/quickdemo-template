import React from 'react';
import PropTypes from 'prop-types';
import { SwitchBackground, SwitchToggle } from './switch.styles';
import {
  InputComponentWrapper as Wrapper,
  InputComponentTitle as Title,
} from '../inputComponents.styles';
import { regularToKebabCase } from '../../../../utils';
import { ATTRIBUTE_TYPES } from '../../../../constants';
import defaultClassName, { classPrefix } from '../classNames';

export const Switch = (props) => {
  const {
    title,
    description,
    attribute,
    className: classNameRaw,
    value,
    handleChange,
    isPlayerLoading,
    disabled,
  } = props;

  let className = `${defaultClassName}-switch`;
  if (attribute) className += ` ${regularToKebabCase(attribute)}`;
  else if (title) className += ` ${regularToKebabCase(title)}`;
  if (classNameRaw) className += ` ${classNameRaw}`;
  className += ` ${classPrefix}-switch`;

  return (
    <Wrapper className={`${className}-component`}>
      {title ? <Title className={`${className}-header`}>{title}</Title> : null}
      {description ? (
        <Description className={`${className}-description`}>
          {description}
        </Description>
      ) : null}
      <SwitchBackground
        disabled={disabled}
        isPlayerLoading={isPlayerLoading}
        value={value}
        onClick={() => handleChange(!value)}
      >
        <SwitchToggle />
      </SwitchBackground>
    </Wrapper>
  );
};

Switch.compatibleAttributes = new Set([ATTRIBUTE_TYPES.boolean]);

export default Switch;
