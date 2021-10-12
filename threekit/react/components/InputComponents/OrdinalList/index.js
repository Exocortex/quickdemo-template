import React from 'react';
import { ListWrapper } from './ordinalList.styles';
import {
  InputComponentWrapper as Wrapper,
  InputComponentTitle as Title,
  InputComponentDescription as Description,
} from '../inputComponents.styles';
import Item from './OrdinalListItem';
import container from '../ordinalContainer';
import { ATTRIBUTE_TYPES } from '../../../../constants';

export const OrdinalListComponent = (props) => {
  const {
    title,
    description,
    items,
    handleSelect,
    handleDeleteItem,
    handleMouseEnter,
    handleMouseLeave,
    handleMouseDown,
    displayItemConfigurator,
    activeAttribute,
  } = Object.assign({ items: [], displayItemConfigurator: 'default' }, props);

  return (
    <Wrapper>
      {title ? <Title>{title}</Title> : null}
      {description ? <Description>{description}</Description> : null}
      <ListWrapper>
        {items.map((item, i) => (
          <Item
            key={i}
            idx={i}
            {...item}
            displayItemConfigurator={displayItemConfigurator}
            activeAttribute={activeAttribute}
            handleDelete={handleDeleteItem}
            handleSelect={handleSelect}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            handleMouseDown={handleMouseDown}
          />
        ))}
      </ListWrapper>
    </Wrapper>
  );
};

const OrdinalList = container(OrdinalListComponent);

OrdinalList.compatibleAttributes = new Set([ATTRIBUTE_TYPES.arrayEditor]);

export default OrdinalList;
