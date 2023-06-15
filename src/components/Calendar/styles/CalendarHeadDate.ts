import styled from "styled-components";
import colors from "../../../styles/colors";

export const HeadDate = styled.div<{isActive?: boolean}>`
  color:  ${props => props.isActive? 'white' : colors.textPrimary};
  cursor: pointer;
  width: 35px;
  height: 35px;
  font-size: 22px;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${props => props.isActive? '50%' : 'none'};
  background-color: ${props => props.isActive? colors.mainRed : 'none'};
`
