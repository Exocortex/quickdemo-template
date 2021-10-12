import React from 'react';
import { useAttribute } from '../../../hooks';
import { ATTRIBUTE_TYPES } from '../../../../constants';

const attributeValueContainer = (WrappedComponent) => (props) => {
  if (!props.attribute) return <WrappedComponent {...props} />;
  const [attributeData] = useAttribute(props.attribute);
  if (!attributeData) return null;

  let value = attributeData.value;

  if (attributeData.type === ATTRIBUTE_TYPES.asset) {
    if (!attributeData.value?.assetId) return null;
    value = attributeData.values.find(
      (el) => el.assetId === attributeData.value.assetId
    )?.name;
  }

  return <WrappedComponent value={value} />;
};

export default attributeValueContainer;
