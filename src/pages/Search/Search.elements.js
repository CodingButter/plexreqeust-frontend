import styled from "styled-components";
import Slider from "../../components/Slider/Slider";
import MiniStats from "../../components/MiniStats/MiniStats";
const HeaderPosition = styled.div`
  align-items: center;
  display: flex;
  flex: 1 1 25%;
  height: 100%;
  overflow: hidden;
  white-space: nowrap;
`;

export const ResultPageContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  padding-bottom: 100px;
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

export const HeaderLeft = styled(HeaderPosition)``;
export const HeaderRight = styled(HeaderPosition)`
  justify-content: flex-end;
`;

export const StyledSlider = styled(Slider)``;
export const ActiveMiniStats = styled(MiniStats)``;
