import styled from "styled-components";
import breakpoints from "../../../styles/breakpoints";

export const CalendarNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 4%;
  @media (max-width: ${breakpoints.breakPoint1}) {
    margin: 0 3%;
  }
`
export const CalendarNavDate = styled.div`
  font-size: 20px;
  font-weight: 500;
  text-align: center;
`
