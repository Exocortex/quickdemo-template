import React from 'react';
import ReactDOM from 'react-dom';
import { Wrapper, Background } from './modal.styles';

export const Modal = ({ children, handleClose }) => {
  return (
    <Background onClick={handleClose}>
      <Wrapper onClick={(e) => e.stopPropagation()}>{children}</Wrapper>
    </Background>
  );
};

export default (props) =>
  props.show
    ? ReactDOM.createPortal(
        <Modal {...props} />,
        document.getElementById('root')
      )
    : null;
