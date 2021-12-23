import styled from "styled-components";
import Slider from "../../components/Slider/Slider";
import MiniStats from "../../components/MiniStats/MiniStats";
import { Grid } from "../../components/global/Containers";
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
export const MediaDetailSection = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  display:flexbox;
`;

export const LeftSide = styled.div`
width:30%`;

export const RightSide = styled.div`
width:65%`;

export const TorrentSection = styled.div`
  font-size: 20px;
  height: 500px;
  margin: auto;
  display: flex;
  padding: 20px;
  margin-bottom: 100px;
  color: white;
  & tr td {
    background: #1f2326;
  }
  & tr {
    background: #1f2326;
    & td {
      display: inline-block;
      width: 33%;
      text-align: left;
      padding: 5px;
    }
  }
  & tbody tr:hover {
    filter: invert();
    cursor: pointer;
  }
  & tbody tr:nth-child(odd) td {
    background: hsla(0, 0%, 100%, 0.08);
  }
`;
