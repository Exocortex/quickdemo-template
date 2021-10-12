import styled from 'styled-components';

export const InputComponentWrapper = styled.div`
  margin-bottom: 20px;
`;

export const InputComponentTitle = styled.div`
  margin-bottom: 12px;
  font-size: 16px;
  font-weight: 600;
  color: ${(props) => props.theme.headingColor};
`;

export const InputComponentDescription = styled.div`
  margin-bottom: 8px;
  color: ${(props) => props.theme.textColorSecondary};
`;

export const ButtonWrapper = styled.div`
  width: max-content;
  height: max-content;
  padding: 6px 12px;

  border-width: 1px;
  border-style: solid;
  border-color: ${(props) =>
    props.selected ? props.theme.primaryColor : props.theme.borderColorBase};
  border-radius: ${(props) => props.theme.borderRadius};

  color: ${(props) => (props.selected ? '#fff' : props.theme.headingColor)};
  font-size: ${(props) => props.theme.fontBaseSize};

  background-color: ${(props) =>
    props.selected ? props.theme.primaryColor : '#fff'};

  cursor: ${(props) => (props.isPlayerLoading ? 'wait' : 'pointer')};

  transition: all 0.3s;

  &:hover {
    border: 1px solid ${(props) => props.theme.primaryColor};
    color: ${(props) => (props.selected ? '#fff' : props.theme.primaryColor)};
  }
`;
