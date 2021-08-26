import styled from "styled-components";
import MiniStats from "../MiniStats/MiniStats";
const Side = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
`;

export const Container = styled.div`
  align-items: center;
  background: #1f2326;
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  font-family: Open Sans Regular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 13px;
  height: 60px;
  justify-content: space-between;
  position: relative;
  width: 100%;
  z-index: 1000;
`;

export const LeftSide = styled(Side)`
  padding-left: 10px;

  & > div > a,
  & > div > button {
    align-items: center;
    display: inline-flex;
    font-size: 20px;
    height: 100%;
    padding: 0 10px;
    position: relative;
  }
`;

export const ActivityButtonWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const RightSide = styled(Side)`
  padding-right: 17px;
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
