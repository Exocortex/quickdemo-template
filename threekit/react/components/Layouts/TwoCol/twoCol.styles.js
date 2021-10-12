import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  max-width: 100vw;
  width: ${(props) => props.width || '100%'};
  margin: 0 auto;
  display: grid;
  grid-template-columns: ${(props) =>
    `${props.leftSize || '50%'} ${props.rightSize || '50%'}`};
  grid-gap: ${(props) => props.columnGap};

  overflow-x: hidden;
`;
