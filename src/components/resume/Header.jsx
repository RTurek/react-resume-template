import React from "react"
import styled from "styled-components";
import Typography from '@material-ui/core/Typography';
import { COLORS } from "../../styles/styles";

const HeaderContainer = styled.header`
  height: 40px;
  width: 100vw;
  background-color: #0099ff;
`;

const HeaderSolidBar = styled.div`
  height: 40px;
  width: 100%;
  background-color: ${COLORS.PRIMARY};
`;

const WhiteBar = styled.div`
  float: left;
  background-color: ${COLORS.WHITE};
  width: 32px;
  height: 100%;
  margin-left: 32px;
`;

const barTypographyStyle = {
  position: 'relative',
  color: COLORS.WHITE,
  top: '9px',
  left: '14px'
};

export default function Resume() {
  return (
    <HeaderContainer className="-mx-10">
      <HeaderSolidBar>
        <WhiteBar />
        <Typography style={barTypographyStyle}>RESUME</Typography>
      </HeaderSolidBar>
      <Typography>RYAN TUREK</Typography>
    </HeaderContainer>
  );
}
