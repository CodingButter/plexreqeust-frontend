import styled from "styled-components";
export const BackgroundBar = styled.div`
  width: 100%;
  height: 100%;
  background: #1f2326;
  position: relative;
  overflow: hidden;
`;

export const Progress = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: ${({ progress }) => progress * 100}%;
  height: 100%;
  background: var(--color-accent-background);
`;
export const Percentage = styled.span`
  position: absolute;
  text-align: center;
  height: 100%;
  width: 100%;
  color: white;
  font-weight: bold;
`;
