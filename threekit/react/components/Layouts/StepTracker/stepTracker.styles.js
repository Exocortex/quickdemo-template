import styled from 'styled-components';

export const ItemCircle = styled.div`
  height: 32px;
  width: 32px;
  border-radius: 50%;
  font-weight: 600;

  & > div {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    width: max-content;
    margin: 0 auto;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  padding: 14px 0;
  background: #f2f2f2;

  & > div {
    width: 100%;
    display: flex;
    flex-direction: row;
  }
`;

export const Item = styled.div`
  flex: 1;

  & > div:nth-child(1) {
    text-align: center;
    margin-bottom: 4px;

    color: ${(props) =>
      props.complete
        ? `${props.theme.primaryColor}aa`
        : props.active
        ? props.theme.primaryColor
        : props.theme.textColorSecondary};
  }

  & > div:nth-child(2) {
    display: grid;
    grid-template-columns: 1fr max-content 1fr;
    height: max-content;

    & > div:nth-child(1),
    & > div:nth-child(3) {
      height: 2px;
      position: relative;
      top: 50%;
      transform: translateY(-50%);
    }

    & > div:nth-child(1) {
      background: ${(props) =>
        props.isFirst
          ? 'none'
          : props.complete || props.active
          ? props.theme.primaryColor
          : props.theme.borderColorBase};
    }

    ${ItemCircle} {
      background: ${(props) =>
        props.active
          ? props.theme.primaryColor
          : props.complete
          ? `${props.theme.primaryColor}11`
          : '#fff'};

      border: 1px solid
        ${(props) =>
          props.active || props.complete
            ? props.theme.primaryColor
            : props.theme.borderColorBase};

      color: ${(props) =>
        props.active
          ? '#fff'
          : props.complete
          ? props.theme.primaryColor
          : props.theme.textColor};
    }

    & > div:nth-child(3) {
      background: ${(props) =>
        props.isLast
          ? 'none'
          : props.complete
          ? props.theme.primaryColor
          : props.theme.borderColorBase};
    }
  }
`;
