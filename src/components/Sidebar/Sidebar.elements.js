import styled from "styled-components";
import ActivityButton from "../ActivityButton/ActivityButton";
import { ALink } from "../global";
export const SidebarUnderlay = styled.div`
  min-width: 60px;
`;

export const SidebarContainer = styled.div`
  --width: ${({ expanded }) => (expanded ? 260 : 60)}px;
  background-color: #1f2326;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  position: ${({ expanded }) => (expanded ? "relative" : "absolute")};
  transition: max-width 0.2s cubic-bezier(0.4, 0, 0.2, 1),
    background-color 1s ease-out;
  min-width: var(--width);
  max-width: var(--width);
  width: var(--width);
`;

export const SidebarPane = styled.div`
  opacity: 1;
  transform: translateX(0%) scale(1) translateZ(0px);
`;

export const SidebarScroller = styled.div`
  flex-grow: 1;
  padding: 0;
  overflow-x: hidden;
  overflow-y: scroll;
  padding-right: 5px;
  scrollbar-color: hsla(0, 0%, 100%, 0.2) transparent;
  -webkit-overflow-scrolling: touch;
`;

export const OverflowWrap = styled.div`
  overflow: ${({ expanded }) => (expanded ? "hidden" : "initial")};
`;

export const SidebarLinkWrap = styled.div`
  height: 40px;
  min-height: 40px;
  align-items: stretch;
  display: flex;
  justify-content: space-between;
  padding: 0;
  width: 100%;
  flex-grow: 1;
  overflow: hidden;
  & .activity-label  {
    display:none;
  }
    background: ${({ selected }) =>
      selected ? "hsla(0, 0%, 100%, 0.07)" : "initial"};
    box-shadow: ${({ selected }) =>
      selected ? "inset 4px 0 0 0 #e5a00d" : "initial"};
    color: ${({ selected }) =>
      selected ? "#fff !important" : "hsla(0,0%,100%,.7)"};
  }
  & .activity-link > span {
    background-color: ${({ selected }) =>
      selected ? "#fff !important" : "hsla(0,0%,100%,.7)"};
  }
  &:hover > a,
  &:hover > div {
    background: hsla(0, 0%, 100%, 0.07);
    color: #fff !important;
  }
`;

export const SidebarLink = styled(ALink)`
  padding: 0 0 0 20px;
  align-items: center;
  display: flex;
  flex-grow: 1;
  flex-shrink: 1;
  min-width: 60px;
  width: 75%;
  padding-right: 25%;
  & a.activity-link {
    padding: 0 !important;
  }
`;

export const SidebarActivityButton = styled(ActivityButton)`
  align-items: center;
  display: flex;
  flex-grow: 1;
  flex-shrink: 1;
  min-width: 60px;
  width: 75%;
`;

export const SidebarIconWrap = styled.div`
  font-size: 18px;
  height: auto;
  padding-right: 22px;
  transition: color 0.2s;
  width: 40px;
  flex-shrink: 0;
`;

export const SidebarLinkTitleWrap = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const SidebarLinkTitle = styled.div`
  align-self: flex-start;
  font-family: Open Sans Regular, Helvetica Neue, Helvetica, Arial, sans-serif;
  max-width: 100%;
  min-width: 0;
  overflow: hidden !important;
  text-overflow: ellipsis;
  white-space: nowrap !important;
  display: inline-block;
  font-size: 15px;
  line-height: 1.5;
  transition: color 0.2s;
`;
