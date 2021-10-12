import React from 'react';
import {
  ConfiguratorWrapper as Wrapper,
  ConfiguratorTitle as Title,
} from './ordinalFloorPlanner.styles';
import { Form } from '../../Forms';

export const FloorPlannerItemConfigurator = ({ name }) => {
  return (
    <Wrapper>
      <Title>{name}</Title>
      <Form nestedConfigurator />
    </Wrapper>
  );
};

export default FloorPlannerItemConfigurator;
