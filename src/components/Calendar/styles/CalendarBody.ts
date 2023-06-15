import styled from "styled-components";

export const CalendarBody = styled.div`
  padding: 20px 0 20px 20px;
  height: calc(100% - 170px);
  overflow-y: scroll;
  overflow-x:initial;
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  
  &::-webkit-scrollbar {
    width: 0;
  }
`
