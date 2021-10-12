import React, { createContext } from 'react';
import {
  CanvasWrapper,
  Content,
  TrashWrapper,
} from './ordinalFloorPlanner.styles';
import Item from './FloorPlannerItem';
import container from '../ordinalContainer';
import GridBackground from './GridBackground';
import { Delete as DeleteIcon } from '../../../icons';
import { ATTRIBUTE_TYPES } from '../../../../constants';

export const OrdinalFloorPlannerContext = createContext();

export const OrdinalFloorPlannerComponent = (props) => {
  const {
    children,
    items,
    handleSelect,
    handleDragEnter,
    handleDragLeave,
    handleDragStart,
    handleDrop,
    displayItemConfigurator,
    activeAttribute,
  } = Object.assign({ displayItemConfigurator: 'modal' }, props);

  return (
    <OrdinalFloorPlannerContext.Provider
      value={{
        displayItemConfigurator,
        handleDragStart,
        handleDragEnter,
        handleDragLeave,
        handleDrop,
        handleSelect,
        activeAttribute,
      }}
    >
      <CanvasWrapper>
        <GridBackground />
        <Content>
          {children
            ? children(items)
            : items.map((el, i) => <Item key={i} idx={i} {...el} />)}
        </Content>
        <TrashWrapper
          className={`tk-floor-planner-item-delete`}
          onDrop={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleDrop('delete');
          }}
          onDragEnter={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleDragEnter('delete');
          }}
          onDragOver={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
          onDragLeave={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleDragLeave('delete');
          }}
        >
          <div>
            <DeleteIcon />
          </div>
        </TrashWrapper>
      </CanvasWrapper>
    </OrdinalFloorPlannerContext.Provider>
  );
};

const OrdinalFloorPlanner = container(OrdinalFloorPlannerComponent);

OrdinalFloorPlanner.compatibleAttributes = new Set([
  ATTRIBUTE_TYPES.arrayEditor,
]);

OrdinalFloorPlanner.Item = Item;

export default OrdinalFloorPlanner;
