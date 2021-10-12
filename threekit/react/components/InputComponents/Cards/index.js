import React from 'react';
import PropTypes from 'prop-types';
import {
  Content,
  ItemWrapper,
  ItemContent,
  Main,
  Price,
  ActionButton,
} from './cards.styles';
import {
  InputComponentWrapper as Wrapper,
  InputComponentTitle as Title,
  InputComponentDescription as Description,
} from '../inputComponents.styles';
import { regularToKebabCase } from '../../../../utils';
import { ATTRIBUTE_TYPES } from '../../../../constants';
import defaultClassName, { classPrefix } from '../classNames';

export const Cards = (props) => {
  const {
    attribute,
    title,
    description,
    options,
    actionLabel,
    handleClick,
    className: classNameRaw,
  } = Object.assign(
    {
      options: [],
      actionLabel: 'Add',
    },
    props
  );

  let className = `${defaultClassName}-cards`;
  if (attribute) className += ` ${regularToKebabCase(attribute)}`;
  else if (title) className += ` ${regularToKebabCase(title)}`;
  if (classNameRaw) className += ` ${classNameRaw}`;
  className += ` ${classPrefix}-cards`;

  return (
    <Wrapper className={`${className}-component`}>
      {title ? <Title className={`${className}-header`}>{title}</Title> : null}
      {description ? (
        <Description className={`${className}-description`}>
          {description}
        </Description>
      ) : null}
      <Content className={`${className}-content`}>
        {options.map((option, i) => {
          const { name, description, value, imageUrl, price } = option;
          const cls = `${className}-option option-${i + 1} ${value}`;
          return (
            <ItemWrapper key={i} className={cls}>
              <ItemContent>
                <div className={`${cls} option-icon`}>
                  {imageUrl ? <img alt={name} src={imageUrl} /> : null}
                </div>

                <Main>
                  <div className={`${cls} option-name`}>{name}</div>
                  <div className={`${cls} option-description`}>
                    {description}
                  </div>
                </Main>

                <Price className={`${cls} option-price`}>{price}</Price>
              </ItemContent>

              <ActionButton
                className={`${cls} option-action`}
                onClick={() => handleClick(value)}
              >
                {actionLabel}
              </ActionButton>
            </ItemWrapper>
          );
        })}
      </Content>
    </Wrapper>
  );
};

Cards.propTypes = {
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

Cards.defaultProps = {
  attribute: undefined,
  title: undefined,
  className: undefined,
  selected: undefined,
  hideDisabled: undefined,
  handleClick: undefined,
  options: [],
};

Cards.compatibleAttributes = new Set([
  ATTRIBUTE_TYPES.asset,
  ATTRIBUTE_TYPES.arraySelector,
]);

export default Cards;
