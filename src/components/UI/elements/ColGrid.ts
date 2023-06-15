import styled from "styled-components";

export const ColGrid = styled.div<{$columns: number}>`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(${props => props.$columns}, 1fr);
  grid-template-rows: 15px 40px;
  justify-items: center;
  align-items: center;
`
