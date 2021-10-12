import styled from 'styled-components';

export const ListWrapper = styled.div`
  background: #f9f9f9;
  border-radius: ${(props) => props.theme.borderRadius};
  padding: 10px 8px;
`;

export const ItemWrapper = styled.div`
  height: 70px;
  height: max-content;
  border-radius: ${(props) => props.theme.borderRadius};
  background: #eeeeee;
  margin-bottom: 8px;
  user-select: none;
  overflow: hidden;
`;

export const ItemPrimaryWrapper = styled.div`
  height: 70px;
  padding: 0 20px;

  display: grid;
  background: none;
  border-radius: 2px;
  /* background: white; */
  cursor: pointer;
  /* transition: all 0.2s; */
  transition: all 0.2s;

  display: grid;
  grid-template-columns: ${(props) =>
    props.showDropdown
      ? 'max-content auto max-content max-content'
      : 'max-content auto max-content'};
  grid-gap: 25px;

  & > div {
    height: max-content;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }

  & > div:nth-child(1) {
    cursor: grab;
    user-select: none;
  }

  & > div:nth-child(3) {
    color: grey;
    font-size: 16px;
    transition: all 0.3s;
  }

  & > div:nth-child(3):hover {
    color: ${(props) => props.theme.primaryColor};
  }
`;

export const PrimaryItemContent = styled.div`
  & > div:nth-child(1) {
    font-size: 14px;
    font-weight: 600;
  }
  & > div:nth-child(2) {
    font-size: 13px;
    font-weight: 300;
  }
`;

export const ItemSecondaryWrapper = styled.div`
  height: 0px;
`;
