import styled from "styled-components";
import Slider from "../Slider/Slider";
import ProgressBar from "../ProgressBar/ProgressBar";
const HeaderPosition = styled.div`
  align-items: center;
  display: flex;
  flex: 1 1 25%;
  height: 100%;
  overflow: hidden;
  white-space: nowrap;
`;

export const HeaderLeft = styled(HeaderPosition)``;
export const HeaderRight = styled(HeaderPosition)`
  justify-content: flex-end;
`;

export const StyledSlider = styled(Slider)``;
export const Stats = styled.div`
  margin-right: 10px;
  position: relative;
  min-width: 100px;
  text-align: center;
`;
const Stat = styled.span``;
export const DownloadSpeed = styled(Stat)``;
export const Active = styled(Stat)``;
export const Completed = styled(Stat)``;
export const Unit = styled.span`
  margin-left: 2px;
  font-size: 12px;
`;
export const DownloadProgress = styled(ProgressBar)`
  width: 100%;
  height: 23px;
  position: absolute;
  overflow: hidden;
  left: 0px;
  bottom: 0px;
  opacity: 0.8;
  border-radius: 2px;
  z-index: -1;
  //border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0px 0px 3px 3px rgba(0, 0, 3px, 3px, 0.3);
`;
