import styled from "styled-components";

export const MediaResultWrap = styled.div`
  display: contents;
`;

export const MediaContent = styled.div`
  flex-grow: 1;
  position: relative;
  overflow-x: hidden;
  overflow-y: scroll;
  scrollbar-color: hsla(0, 0%, 100%, 0.2) transparent;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    width: 14px;
  }
  &::-webkit-scrollbar-corner,
  &::-webkit-scrollbar-track {
    background-color: initial;
  }
  &::-webkit-scrollbar-thumb {
    background-clip: padding-box;
    background-color: hsla(0, 0%, 100%, 0.2);
    border: 3px solid transparent;
    border-radius: 8px;
    min-height: 50px;
  }
`;
