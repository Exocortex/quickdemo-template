import styled from 'styled-components';

/***********************************************
 * index.js
 **********************************************/

export const CanvasWrapper = styled.div`
  width: 100%;
  border-radius: ${(props) => props.theme.borderRadius};

  position: relative;

  svg {
    width: 100%;
  }
`;

export const Content = styled.div`
  height: max-content;
  width: max-content;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: row;
`;

export const TrashWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;

  height: 40px;
  width: 40px;
  border: 1px solid grey;
  border-radius: ${(props) => props.theme.borderRadius};
  color: grey;

  & > div {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    text-align: center;
    height: max-content;
    pointer-events: none;
    font-size: 0px;
  }
`;

/***********************************************
 * FloorPlannerItem.js
 **********************************************/

export const ConfigureButton = styled.div`
  height: 16px;
  width: 16px;
  background: ${(props) => props.theme.secondaryColor || 'orange'};
  border-radius: 50%;
  opacity: 0;
  display: none;
  transition: opacity 0.3s;
  cursor: pointer;
  color: white;
  font-size: 0px;
  text-align: center;

  & > div {
    position: relative;
    top: 50%;
    transform: translateY(-50%);

    svg {
      height: 14px;
      width: 14px;
    }

    .tk-icon.stroke {
      stroke: white;
      stroke-width: 1;
    }
  }

  position: absolute;
  top: 3px;
  left: 3px;
`;

export const ItemWrapper = styled.div`
  height: 48px;
  width: 48px;
  margin: 3px;
  background: ${(props) => props.theme.primaryColor};
  border-radius: ${(props) => props.theme.borderRadius};
  cursor: grab;
  user-select: none;

  position: relative;

  &:hover {
    ${ConfigureButton} {
      opacity: 1;
      display: block;
    }
  }

  & > div {
  }

  & > div:nth-child(1) {
    height: 44px;
    width: 44px;
    pointer-events: none;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    img {
      height: 100%;
    }
  }
`;

/***********************************************
 * FloorPlannerItemConfigurator.js
 **********************************************/

export const ConfiguratorWrapper = styled.div`
  padding: 9px 12px;
`;

export const ConfiguratorTitle = styled.div`
  text-align: center;
  font-size: 20px;
  text-transform: uppercase;
`;
