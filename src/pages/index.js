import React from "react"
import styled from "styled-components";
import Resume from "../components/resume/Resume"
import GlobalStyle from "../components/style/GlobalStyle";

const AppContainer = styled.div`
  height: 100%;
  width: 100%;
`;

export default function IndexApp() {
  return (
    <AppContainer>
      <GlobalStyle />
      <Resume />
    </AppContainer>
  );
}
