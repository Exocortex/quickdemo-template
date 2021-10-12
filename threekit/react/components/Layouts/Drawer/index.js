import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Wrapper, Background } from './drawer.styles';

const TRANSITION_DURATION = 0.2;

export const Drawer = ({ children, handleClose }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    (() => {
      setShow(true);
    })();
  }, []);

  const handleClickClose = () => {
    setShow(false);
    setTimeout(() => {
      handleClose();
    }, 1000 * TRANSITION_DURATION);
  };

  return (
    <Background
      show={show}
      transitionDuration={TRANSITION_DURATION + 's'}
      onClick={handleClickClose}
    >
      <Wrapper
        show={show}
        transitionDuration={TRANSITION_DURATION + 's'}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </Wrapper>
    </Background>
  );
};

export default (props) =>
  props.show
    ? ReactDOM.createPortal(
        <Drawer {...props} />,
        document.getElementById('root')
      )
    : null;
