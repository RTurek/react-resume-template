import React from "react"
import styled from "styled-components";
import Header from "./Header";
import LeftColumn from "./LeftColumn";
import MainColumn from "./MainColumn";
import Footer from "./Footer";

const ResumeContainer = styled.div`
  height: 100%;
  max-width: 1000px;
  margin: 32px;
  display: flex;
  flex-direction: column;
`;

const ColumnContainer = styled.section`
  height: 100%;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: row;
`;

export default function Resume() {
  return (
    <ResumeContainer>
      <Header />
      <ColumnContainer>
        <LeftColumn />
        <MainColumn />
      </ColumnContainer>
      <Footer />
    </ResumeContainer>
  );
}
