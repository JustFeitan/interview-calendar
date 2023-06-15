import styled from "styled-components";
import breakpoints from "../../../styles/breakpoints";

export const MainContainer = styled.div`
  width: 100%;
  @media (min-width: ${breakpoints.breakPoint1}) {
    width: ${breakpoints.breakPoint1};
    justify-content: center;
  };
`
