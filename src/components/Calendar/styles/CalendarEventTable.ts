import styled from "styled-components";
import colors from "../../../styles/colors";

export const CalendarEventTable = styled.div`
  
  height: min-content;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(24, 50px);
  background-color: ${colors.borderMainColor};
  grid-gap: 1px;
  
`
