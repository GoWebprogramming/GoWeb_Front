import styled from 'styled-components';

// src/pages 폴더에 있는 각 페이지에 대한 Wrapper입니다.
export const MainPageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  background-color: ${(props) => props.theme.bgColor};
`;

export const SigninPageWrapper = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  font-family: Roboto;
  background: #fafcf9;
  @media ${(props) => props.theme.mobile} {
    padding: 0;
  }
`;

export const SignupPageWrapper = styled.div`
  position: relative;
  display: flex;
  height: 120vh;
  width: 100vw;
  padding: 80px 0;
  justify-content: center;
  align-items: center;
  font-family: Roboto;
  background: #fafcf9;
  @media ${(props) => props.theme.mobile} {
    padding: 0;
    align-items: normal;
  }
`;

export const GridViewPageWrapper = styled.div`
  min-height: 100vh;
  height: auto;
`;
export const KeywordPageWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: auto;
  background-color: ${(props) => props.theme.bgColor};
`;
export const TimPageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.bgColor};
`;
