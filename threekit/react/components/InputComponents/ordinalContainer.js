import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from 'styled-components';

const ordinalContianer = (WrappedComponent) => (props) => {
  const activeId = useRef(null);
  const currentEl = useRef(null);
  const theme = useTheme();

  const { options, attributes, handleMoveItem, handleDeleteItem } = props;

  const handleDragStart = (id) => {
    activeId.current = id;
  };

  const handleDragEnter = (id) => {
    if (activeId.current === null) return;
    currentEl.current = document.getElementsByClassName(
      `tk-floor-planner-item-${id}`
    )[0];
    if (id === 'delete') {
      currentEl.current.style.background = theme.secondaryColor || 'orange';
      currentEl.current.style.border = `1px solid ${
        theme.secondaryColor || 'orange'
      }`;
      currentEl.current.style.color = '#fff';
    } else if (id !== activeId.current)
      currentEl.current.style.background = theme.secondaryColor || 'orange';
  };

  const handleDragLeave = (id) => {
    if (activeId.current === null) return;
    if (id === 'delete') {
      currentEl.current.style.background = 'none';
      currentEl.current.style.border = `1px solid grey`;
      currentEl.current.style.color = 'grey';
    } else currentEl.current.style.background = theme.primaryColor;
  };

  const handleDrop = (id) => {
    if (id === 'delete') {
      currentEl.current.style.background = 'none';
      currentEl.current.style.border = `1px solid grey`;
      currentEl.current.style.color = 'grey';
    } else currentEl.current.style.background = theme.primaryColor;

    if (id === 'delete') return handleDeleteItem(activeId.current);

    if (activeId.current !== null && id !== null && activeId.current !== id)
      handleMoveItem(activeId.current, id, { method: 'move' });

    activeId.current = null;
    currentEl.current = null;
  };

  const items = Object.values(attributes || []).reduce((output, attribute) => {
    if (!attribute.value?.assetId?.length) return output;
    output.push({
      attributeName: attribute.name,
      attributeLabel: attribute.label,
      ...attribute.value,
      ...options[attribute.value.assetId],
    });
    return output;
  }, []);

  return (
    <WrappedComponent
      {...props}
      items={items}
      handleDragStart={handleDragStart}
      handleDragEnter={handleDragEnter}
      handleDragLeave={handleDragLeave}
      handleDrop={handleDrop}
    />
  );
};

export default ordinalContianer;
