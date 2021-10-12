import styled from 'styled-components';
import { InputComponentWrapper } from '../inputComponents.styles';

const HEIGHT = '32px';
const MAX_HEIGHT = '200px';

export const DropdownWrapper = styled(InputComponentWrapper)`
  position: relative;
  background-color: #fff;
  width: max-content;
  height: ${HEIGHT};
  margin-bottom: 15px;

  border-width: 1px;
  border-style: solid;
  border-color: ${(props) =>
    props.active ? props.theme.primaryColor : props.theme.borderColorBase};
  border-radius: ${(props) => props.theme.borderRadius};

  transition: all 0.2s;

  &:hover {
    border-color: ${(props) => props.theme.primaryColor};
  }

  cursor: ${(props) => (props.isLoading ? 'wait' : 'pointer')};
`;

export const DropdownMain = styled.div`
  height: ${HEIGHT};
  min-width: 220px;
  width: max-content;

  padding: 0 11px;

  display: grid;
  grid-template-columns: 1fr max-content;

  & > div:nth-child(1) {
    color: ${(props) =>
      props.active
        ? props.theme.disabledColor
        : props.hasPlaceholder
        ? props.theme.disabledColor
        : props.theme.headingColor};
  }

  & > div:nth-child(2) {
    color: ${(props) => props.theme.disabledColor};
  }

  & > div {
    height: max-content;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const DropdownOptions = styled.div`
  max-height: ${(props) => (props.hide ? '0px' : MAX_HEIGHT)};
  height: auto;
  width: 100%;

  background: #fff;
  box-shadow: ${(props) => props.theme.boxShadowBase};
  border-radius: ${(props) => props.theme.borderRadius};
  opacity: ${(props) => (props.hide ? 0 : 1)};

  overflow: hidden;

  transition: all 0.2s;

  position: absolute;
  top: calc(${HEIGHT} + 3px);
  z-index: 100;
`;

export const DropdownOptionsContent = styled.div`
  padding: 4px 0;
  overflow: scroll;
  max-height: ${MAX_HEIGHT};

  display: flex;
  flex-direction: column;
`;

export const DropdownOption = styled.div`
  height: ${HEIGHT};
  min-height: ${HEIGHT};
  padding: 0 11px;

  &:hover {
    background-color: ${(props) => (props.selected ? '#e6f7ff' : '#f5f5f5')};
  }

  color: ${(props) => props.theme.headingColor};
  font-weight: ${(props) => (props.selected ? 600 : 400)};
  background-color: ${(props) => (props.selected ? '#e6f7ff' : 'none')};

  & > div {
    height: max-content;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }
`;
