import styled from "styled-components";
export const BackgroundBar = styled.div`
  width: 100%;
  height: 100%;
  background: #1f2326;
  position: relative;
  overflow: hidden;
`;

export const Progress = styled.div`
  position: relative;
  width: ${({ progress }) => progress * 100}%;
  height: 100%;
  background: var(--color-accent-background);
`;
