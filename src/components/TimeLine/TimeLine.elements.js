import styled from "styled-components";

export const CanvasWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  margin-top: 5px;
  overflow: hidden;
  border-radius: 3px;
`;

export const Canvas = styled.canvas`
  width: 100%;
  height: 100%;
`;

export const Label = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  line-height: 100%;
  text-align: center;
  color: white;
  top: 30%;
`;
