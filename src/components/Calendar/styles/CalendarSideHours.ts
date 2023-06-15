import styled from "styled-components";
import colors from "../../../styles/colors";

export const SideHours = styled.div`
  grid-gap: 1px;
  display: grid;
  grid-template-columns: 50px;
  grid-template-rows: repeat(24, 50px);
`

export const StyledHour = styled.div`
  height: 100%;
  display: flex;
  position: relative;
  top: -12px;
  align-items: flex-start;
  font-weight: 500;
  color: ${colors.textSecondary};
`
