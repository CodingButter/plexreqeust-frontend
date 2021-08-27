import styled from "styled-components";
import MiniStats from "../MiniStats/MiniStats";
import { Grid } from "../global/Containers";

export const NavbarContainer = styled(Grid)`
  background: #1f2326;
  font-family: Open Sans Regular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 13px;
`;

export const ActivityButtonWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const AAGMiniStats = styled(MiniStats)`
  & > div {
    background: hsla(0, 0%, 100%, 0.08);
  }
  transition: opacity 1s;
  color: white;
  font-size: 18px;
  text-align: center;
  display: ${({ show }) => (show ? "initial" : "none")};
  opacity: ${({ show }) => (show ? 1 : 0)};
`;
