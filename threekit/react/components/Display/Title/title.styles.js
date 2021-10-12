import styled from 'styled-components';

export const Wrapper = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 8px;
  text-align: ${(props) => props.align || 'left'};
`;
