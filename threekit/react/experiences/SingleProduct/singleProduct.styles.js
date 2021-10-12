import styled from 'styled-components';

export const Wrapper = styled.div`
  background: #eeeeee;
  height: 100vh;

  & > div {
    height: 90vh;
    width: 1000px;
    margin: 0 auto;

    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const TitleWrapper = styled.div`
  margin-bottom: 40px;
`;

export const FormWrapper = styled.div`
  width: 420px;
  /* background: #eaeaea; */
  padding: 0px 20px;
`;
