import styled from "styled-components";
import { Icon, ALink } from "../global";

export const ActivityLink = styled(ALink)`
  padding: 0 15px;
  align-items: center;
  display: inline-flex;
  font-size: 20px;
  height: 100%;
  position: relative;
`;

export const IconContainer = styled.span`
  transition: background 0.2s;
  & .activity-icon {
    border-radius: 50%;
    overflow: hidden;
    background-color: ${({ activity }) =>
      activity > 0
        ? "var(--color-accent-background) !important"
        : "hsla(0, 0%, 100%, 0.15)"};
  }
  color: #000;
  border-radius: 50%;
  display: inline-block;
  height: 20px;
  position: relative;
  vertical-align: middle;
  width: 20px;
`;

export const ActivityIcon = styled(Icon)`
  position: absolute;
  top: 0;
`;

export const ActivityLabel = styled.span`
  font-family: Open Sans Semibold, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 11px;
  left: 10px;
  position: absolute;
  top: 20px;
  color: ${({ activity }) =>
    activity > 0 ? "var(--color-accent-background)" : "inherit"};
`;
