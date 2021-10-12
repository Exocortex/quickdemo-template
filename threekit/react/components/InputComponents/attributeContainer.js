import React from 'react';
import {
  useAttribute,
  useAttributesArray,
  useThreekitInitStatus,
  usePlayerLoadingStatus,
  useNestedConfigurator,
  useNestedAttribute,
} from '../../hooks';
import { ATTRIBUTE_TYPES } from '../../../constants';
import { prepAttributeForComponent } from '../../../utils';

const attributesArrayContainer = (WrappedComponent, props) => {
  const {
    attributesArrayLabel,
    imgBaseUrl,
    thumbnailFromMetadata,
    priceFromMetadata,
    descriptionFromMetadata,
  } = props;

  const loading = usePlayerLoadingStatus();

  const [
    optionsRaw,
    attributes,
    addItem,
    deleteItem,
    moveItem,
  ] = useAttributesArray(attributesArrayLabel);
  const [_, address, handleSetActiveAttribute] = useNestedConfigurator();
  if (!optionsRaw) return null;

  const metadataKeys = {
    thumbnailFromMetadata,
    imgBaseUrl,
    priceFromMetadata,
    descriptionFromMetadata,
  };

  const { options } = prepAttributeForComponent(
    { type: ATTRIBUTE_TYPES.arraySelector, values: optionsRaw },
    {
      metadataKeys,
    }
  );

  if (WrappedComponent.compatibleAttributes.has(ATTRIBUTE_TYPES.arraySelector))
    return (
      <WrappedComponent
        isPlayerLoading={loading}
        handleClick={addItem}
        options={Object.values(options)}
        {...props}
      />
    );
  else if (
    WrappedComponent.compatibleAttributes.has(ATTRIBUTE_TYPES.arrayEditor)
  )
    return (
      <WrappedComponent
        isPlayerLoading={loading}
        options={options}
        attributes={attributes}
        handleDeleteItem={deleteItem}
        handleMoveItem={moveItem}
        handleSelect={handleSetActiveAttribute}
        activeAttribute={address?.[0]}
        {...props}
      />
    );
  console.log('incompatible attribute type for this component');
  return null;
};

const attributeContainer = (WrappedComponent, props) => {
  const {
    attribute,
    thumbnailFromMetadata,
    imgBaseUrl,
    priceFromMetadata,
    descriptionFromMetadata,
    hideAttributeTitle,
  } = props;

  const loading = usePlayerLoadingStatus();

  const [attributeData, setAttribute] = useAttribute(attribute);
  if (!attributeData) return null;

  if (!WrappedComponent.compatibleAttributes.has(attributeData.type)) {
    console.log('incompatible attribute type for this component');
    return null;
  }

  const metadataKeys = {
    thumbnailFromMetadata,
    imgBaseUrl,
    priceFromMetadata,
    descriptionFromMetadata,
  };

  const { selected, options } = prepAttributeForComponent(attributeData, {
    metadataKeys,
    sort: props.sort,
  });

  const handleSetAttribute = (value) => setAttribute(value);

  let preppedProps = { ...props };
  if (!hideAttributeTitle && !preppedProps.title)
    preppedProps.title = attributeData.label;

  return (
    <WrappedComponent
      {...preppedProps}
      attribute={attribute}
      selected={selected}
      handleClick={handleSetAttribute}
      options={options}
      isPlayerLoading={loading}
    />
  );
};

const nestedAttributeContainer = (WrappedComponent, props) => {
  const {
    attribute,
    thumbnailFromMetadata,
    imgBaseUrl,
    priceFromMetadata,
    descriptionFromMetadata,
    hideAttributeTitle,
  } = props;

  const loading = usePlayerLoadingStatus();

  const [attributeData, setAttribute] = useNestedAttribute(attribute);
  if (!attributeData) return null;

  if (!WrappedComponent.compatibleAttributes.has(attributeData.type)) {
    console.log('incompatible attribute type for this component');
    return null;
  }

  const metadataKeys = {
    thumbnailFromMetadata,
    imgBaseUrl,
    priceFromMetadata,
    descriptionFromMetadata,
  };

  const { selected, options } = prepAttributeForComponent(attributeData, {
    metadataKeys,
  });

  const handleSetAttribute = (value) => setAttribute(value);

  let preppedProps = { ...props };
  if (!hideAttributeTitle && !preppedProps.title)
    preppedProps.title = attributeData.label || attributeData.name;

  return (
    <WrappedComponent
      {...preppedProps}
      attribute={attribute}
      selected={selected}
      handleClick={handleSetAttribute}
      options={options}
      isPlayerLoading={loading}
    />
  );
};

const container = (WrappedComponent) => (props) => {
  if (props.attribute) {
    if (props.nestedConfigurator)
      return nestedAttributeContainer(WrappedComponent, props);
    return attributeContainer(WrappedComponent, props);
  } else if (props.attributesArrayLabel) {
    return attributesArrayContainer(WrappedComponent, props);
  } else {
    return <WrappedComponent {...props} />;
  }
};

export default container;
