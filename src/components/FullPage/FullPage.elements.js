import styled from "styled-components";

export const ScrollContainer = styled.div`
  -webkit-overflow-scrolling: touch;
  flex-grow: 1;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 25px;
  position: relative;
`;

export const FullPageContainer = styled.div`
  bottom: 0;
  display: flex;
  flex-direction: row;
  font-family: Open Sans Regular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  left: 0;
  overflow: hidden;
  position: absolute;
  right: 0;
  top: 0;
`;
