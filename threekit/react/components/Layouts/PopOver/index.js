import React, { useState, useEffect, useRef } from 'react';
import { Wrapper, Button, ContentWrapper } from './popOver.styles';
import icons from '../../../icons';

export const positions = {
  'top-right': 'top-right',
  'top-left': 'top-left',
  'left-top': 'left-top',
  'left-bottom': 'left-bottom',
  'right-top': 'right-top',
  'right-bottom': 'right-bottom',
  'bottom-right': 'bottom-right',
  'bottom-left': 'bottom-left',
};

export const PopOver = (props) => {
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef(null);
  const toggleRef = useRef(null);
  const { label, position, thumbnail, children, icon } = Object.assign(
    {
      label: 'Form',
      position: positions['top-right'],
      thumbnail: undefined,
      icon: undefined,
    },
    props
  );
  const Icon = icon ? icons[icon] : undefined;

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        !formRef.current?.contains(e.target) &&
        !toggleRef.current?.contains(e.target)
      )
        setShowForm(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showForm, formRef, toggleRef]);

  const handleTogglePopOut = () => {
    setShowForm(!showForm);
  };

  return (
    <Wrapper>
      <Button ref={toggleRef} onClick={handleTogglePopOut}>
        <div>{Icon ? <Icon /> : thumbnail || null}</div>
        <div>{label}</div>
      </Button>
      {showForm ? (
        <ContentWrapper ref={formRef} position={position}>
          {children}
        </ContentWrapper>
      ) : null}
    </Wrapper>
  );
};

export default PopOver;
