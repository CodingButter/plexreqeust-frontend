import styled from "styled-components";

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

  & > a,
  & > button {
    align-items: center;
    display: inline-flex;
    font-size: 20px;
    height: 100%;
    padding: 0 10px;
    position: relative;
  }
`;

export const RightSide = styled(Side)`
  padding-right: 17px;
`;
