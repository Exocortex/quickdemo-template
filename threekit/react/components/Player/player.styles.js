import styled from 'styled-components';
import { TK_PLAYER_DIV_ID } from '../../../constants';

export const Wrapper = styled.div`
  height: ${(props) => props.height};
  min-height: ${(props) => props.minHeight};
  width: ${(props) => props.width};
  position: relative;

  user-select: none;

  #${TK_PLAYER_DIV_ID} {
    height: ${(props) => props.height};
    min-height: ${(props) => props.minHeight};
    width: ${(props) => props.width};
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const TopLeftWidgetsWrapper = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;

  display: flex;
  flex-direction: row;

  & > div {
    margin-right: 8px;
  }

  & > div:last-child {
    margin-right: 0px;
  }
`;

export const TopCenterWidgetsWrapper = styled.div`
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  flex-direction: row;

  & > div {
    margin-right: 8px;
  }

  & > div:last-child {
    margin-right: 0px;
  }
`;

export const TopRightWidgetsWrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;

  display: flex;
  flex-direction: row;

  & > div {
    margin-right: 8px;
  }

  & > div:last-child {
    margin-right: 0px;
  }
`;

export const MiddleLeftWidgetsWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);

  display: flex;
  flex-direction: column;

  & > div {
    margin-bottom: 8px;
  }

  & > div:last-child {
    margin-bottom: 0px;
  }
`;

export const MiddleRightWidgetsWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);

  display: flex;
  flex-direction: column;

  & > div {
    margin-bottom: 8px;
  }

  & > div:last-child {
    margin-bottom: 0px;
  }
`;

export const BottomLeftWidgetsWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;

  display: flex;
  flex-direction: row;

  & > div {
    margin-right: 8px;
  }

  & > div:last-child {
    margin-right: 0px;
  }
`;

export const BottomCenterWidgetsWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  flex-direction: row;

  & > div {
    margin-right: 8px;
  }

  & > div:last-child {
    margin-right: 0px;
  }
`;

export const BottomRightWidgetsWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;

  display: flex;
  flex-direction: row;

  & > div {
    margin-right: 8px;
  }

  & > div:last-child {
    margin-right: 0px;
  }
`;
