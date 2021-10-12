import styled from 'styled-components';

export const Wrapper = styled.div``;

export const TabsWrapper = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.borderColorBase};
`;

export const Tab = styled.div`
  transform: translateY(1px);

  cursor: pointer;
  width: max-content;
  padding: 10px 2px;
  margin: 0px 15px;

  border-bottom: ${(props) =>
    props.selected ? `2px solid ${props.theme.primaryColor}` : 'none'};

  text-align: center;
  font-size: ${(props) => props.theme.fontBaseSize};
  font-weight: 600;
  color: ${(props) =>
    props.selected ? props.theme.primaryColor : props.theme.headingColor};

  &:hover {
    color: ${(props) => props.theme.primaryColor};
  }
`;

export const TabContent = styled.div`
  padding: 10px;
`;
