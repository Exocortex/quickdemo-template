import styled from 'styled-components';

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ButtonWrapper = styled.div`
  width: max-content;
  height: max-content;
  padding: 6px 0px;

  display: grid;
  grid-template-columns: max-content auto;
  grid-gap: 8px;

  cursor: ${(props) => (props.isPlayerLoading ? 'wait' : 'pointer')};
`;

export const IconWrapper = styled.div`
  height: 16px;
  width: 16px;
  border-radius: 50%;
  border: 1px solid
    ${(props) =>
      props.selected ? props.theme.primaryColor : props.theme.borderColorBase};

  position: relative;
  top: 50%;
  transform: translateY(-50%);

  & > div {
    height: 9px;
    width: 9px;
    border-radius: 50%;

    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    background: ${(props) =>
      props.selected ? props.theme.primaryColor : 'none'};
  }
`;

export const Label = styled.div``;
