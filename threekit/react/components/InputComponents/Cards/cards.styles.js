import styled from 'styled-components';

export const Content = styled.div``;

export const ActionButton = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;

  padding-right: 5px;
  background: ${(props) => props.theme.primaryColor};
  color: #fff;
  cursor: pointer;
  opacity: 0;
  transition: all ease-in-out 0.3s;
  padding: 0 14px;

  /* span {
  } */
`;

export const ItemWrapper = styled.div`
  min-height: 80px;
  width: 100%;
  margin-bottom: 8px;
  padding: 10px 10px;

  position: relative;

  user-select: none;

  background-color: #fff;
  border: 1px solid #c1c1c1;
  border-radius: ${(props) => props.theme.borderRadius};
  transition: ease-in-out 0.2s;

  &:hover {
    box-shadow: 0 6px 10px 0 rgb(0 0 0 / 19%);

    ${ActionButton} {
      opacity: 1;
    }
  }
`;

export const ItemContent = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: max-content auto max-content;
  grid-gap: 10px;

  & > div {
    height: max-content;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }

  img {
    width: 60px;
    height: 60px;
  }
`;

export const Main = styled.div`
  /* height: max-content; */

  & > div:nth-child(1) {
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    line-height: 21px;

    margin-bottom: 6px;
  }

  & > div:nth-child(2) {
    font-size: 13px;
    line-height: 16px;

    color: #777b77ee;
    font-family: 'Roboto', sans-serif;
    letter-spacing: 0.4px;
  }
`;

export const Price = styled.div`
  font-weight: 600;
  letter-spacing: 0.8px;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  line-height: 21px;
`;
