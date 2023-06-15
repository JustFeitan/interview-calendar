import styled from "styled-components";
import colors from "../../../styles/colors";
import breakpoints from "../../../styles/breakpoints";

export const CalendarBottom = styled.div`
  font-size:24px;
  height: 60px;
  background: ${colors.backgroundSecondary};
  border-top: 1px solid ${colors.borderMainColor};
  border-bottom: 1px solid ${colors.borderMainColor};
  padding: 10px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: ${breakpoints.breakPoint1}) {
    padding: 10px 50px;
  }
`
