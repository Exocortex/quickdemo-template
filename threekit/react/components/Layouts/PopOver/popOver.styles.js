import styled from 'styled-components';
import { positions } from './index';

const padding = '10px';

export const Wrapper = styled.div``;

export const Button = styled.div`
  min-width: 100px;
  width: max-content;
  display: grid;
  grid-template-rows: max-content max-content;
  grid-gap: 6px;
  background: #fff;
  border: 1px solid ${(props) => props.theme.borderColorBase};
  border-radius: ${(props) => props.theme.borderRadius};
  padding: 6px 14px;
  transform: all 0.3s;
  cursor: pointer;

  &:hover {
    border-color: ${(props) => props.theme.primaryColor};
    color: ${(props) => props.theme.primaryColor};
  }

  & > div:nth-child(1) {
    text-align: center;
  }

  & > div:nth-child(2) {
    text-align: center;
  }
`;

export const ContentWrapper = styled.div`
  position: absolute;
  ${(props) => {
    switch (props.position) {
      case positions['top-right']:
        return `bottom: calc(100% + ${padding}); right: 0;`;
      case positions['top-left']:
        return `bottom: calc(100% + ${padding}); left: 0;`;
      case positions['left-bottom']:
        return `bottom: 0; right: calc(100% + ${padding});`;
      case positions['left-top']:
        return `top: 0; right: calc(100% + ${padding});`;
      case positions['right-bottom']:
        return `bottom: 0; left: calc(100% + ${padding});`;
      case positions['right-top']:
        return `top: 0; left: calc(100% + ${padding});`;
      case positions['bottom-left']:
        return `top: calc(100% + ${padding}); left: 0;`;
      case positions['bottom-right']:
        return `top: calc(100% + ${padding}); right: 0;`;
    }
  }}

  background: #fff;
  padding: 10px 14px;
  border-radius: ${(props) => props.theme.borderRadius};
  box-shadow: ${(props) => props.theme.boxShadowBase};

  height: max-content;
  width: max-content;
`;
