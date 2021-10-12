import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-flow: column;
`;

export const Content = styled.div`
  padding: 20px;
  flex: 1 1 auto;
`;

export const ActionArea = styled.div`
  flex: 0 1 auto;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 20px;
  background: #f2f2f2;
`;
