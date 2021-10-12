import React, { useContext } from 'react';
import {
  ItemWrapper as Wrapper,
  ConfigureButton,
} from './ordinalFloorPlanner.styles';
import { Tooltip } from 'antd';
import { Settings as SettingsIcon } from '../../../icons';
import ItemConfigurator from './FloorPlannerItemConfigurator';
import { Modal, Drawer } from '../../Layouts';
import { OrdinalFloorPlannerContext } from './index';

export const FloorPlannerItem = (props) => {
  const {
    displayItemConfigurator,
    handleDragEnter,
    handleDragLeave,
    handleDragStart,
    handleDrop,
    handleSelect,
    activeAttribute,
  } = useContext(OrdinalFloorPlannerContext);
  const { side, name, attributeName, assetId, imageUrl, metadata, idx } = props;

  const handleOpenConfigurator = (e) => {
    handleSelect(attributeName);
    e.stopPropagation();
  };

  const handleCloseConfigurator = () => handleSelect(undefined);

  const ExpandableComponent =
    displayItemConfigurator === 'modal'
      ? Modal
      : displayItemConfigurator.toLowerCase() === 'drawer'
      ? Drawer
      : undefined;

  return (
    <>
      <Tooltip title={name} placement={side}>
        <Wrapper
          draggable
          className={`tk-floor-planner-item tk-floor-planner-item-${idx}`}
          onDragStart={(e) => {
            // e.preventDefault();
            // e.stopPropagation();
            handleDragStart(idx);
          }}
          onDrop={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleDrop(idx);
          }}
          onDragEnter={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleDragEnter(idx);
          }}
          onDragOver={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
          onDragLeave={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleDragLeave(idx);
          }}
        >
          <div>
            {imageUrl ? (
              <img src={imageUrl} alt="icon" draggable={false} />
            ) : null}
          </div>
          {!!displayItemConfigurator ? (
            <ConfigureButton onClick={handleOpenConfigurator}>
              <div>
                <SettingsIcon />
              </div>
            </ConfigureButton>
          ) : null}
        </Wrapper>
      </Tooltip>
      {!!displayItemConfigurator ? (
        <ExpandableComponent
          show={activeAttribute === attributeName}
          handleClose={handleCloseConfigurator}
        >
          <ItemConfigurator name={name} assetId={assetId} />
        </ExpandableComponent>
      ) : null}
    </>
  );
};

export default FloorPlannerItem;
