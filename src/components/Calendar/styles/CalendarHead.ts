import styled from "styled-components";
import breakpoints from "../../../styles/breakpoints";
import colors from "../../../styles/colors";


export const CalendarHead = styled.div`
  height: 110px;
  background: ${colors.backgroundSecondary};
  border-top: 1px solid ${colors.borderMainColor};
  border-bottom: 1px solid ${colors.borderMainColor};
  padding: 10px 10px 10px 50px;
  display: flex;
  flex-direction: column;
  font-size: 24px;
`
