import styled from 'styled-components';
import { InputComponentWrapper } from '../inputComponents.styles';

export const SwatchWrapper = styled(InputComponentWrapper)`
  display: flex;
  flex-direction: column;
  height: max-content;
  padding: 12px 5px;
  min-width: 120px;
`;

export const SwatchContent = styled.div`
  display: grid;
  grid-template-columns: repeat(5, max-content);
  grid-gap: 12px;
`;

export const SwatchOption = styled.div`
  height: max-content;
  min-width: 80px;
  padding: 12px 5px;

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

  & > div {
    & > div:nth-child(1) {
      margin: 0 auto;
      height: 68px;
      width: 68px;
      background: ${(props) => (props.color ? props.color : 'none')};

      img {
        height: 100%;
        width: 100%;
        object-fit: contain;
      }
    }

    & > div:nth-child(2) {
      text-align: center;
      margin-top: 8px;
    }
  }
`;
