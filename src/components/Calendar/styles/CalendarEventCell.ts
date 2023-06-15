import styled from "styled-components";
import colors from "../../../styles/colors";

export const StyledEventCell = styled.div`
  width: 100%;
  background: ${colors.backgroundPrimary};
 
`
export const StyledEventCellActive = styled.div`
  width: 100%;
  height: 100%;
  background: ${colors.activeEventBackground};
  border: 5px solid white;
  &:hover {
    cursor: pointer;
    background: ${colors.pickedEventBackground};
  }
`

export const StyledEventCellPicked = styled.div`
  width: 100%;
  height: 100%;
  background: ${colors.pickedEventBackground};
  border: 5px solid white;
`
