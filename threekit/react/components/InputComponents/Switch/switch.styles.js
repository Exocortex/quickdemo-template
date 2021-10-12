import styled from 'styled-components';

export const SwitchBackground = styled.div`
  height: 20px;
  width: 50px;
  border-radius: 10px;
  background: ${(props) => props.theme.primaryColor};

  cursor: pointer;
`;

export const SwitchToggle = styled.div`
  height: 16px;
  width: 16px;
  border-radius: 50%;

  position: relative;
  top: 50%;
  transform: translateY(-50%) translateX(3px);

  background: white;
`;
