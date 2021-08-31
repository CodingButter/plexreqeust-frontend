import styled from "styled-components";
import ProgressBar from "../ProgressBar/ProgressBar";
import TimeLine from "../TimeLine/TimeLine";
import { Link } from "react-router-dom";
export const CardWrapper = styled.div`
  position: relative;
  height: 90%;
  width: 90%;
  transition: transform 0.7s ease 1s;
  border-width: 1px;
  box-shadow: 0 0 4px rgb(0 0 0 / 30%);
  transform-style: preserve-3d;
  z-index: 1px;
  //border-radius: 4px;
  perspective: 2000;

  cursor: pointer;
`;

const CardFace = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 4px;
  backface-visibility: hidden;
  border-width: 0px;
`;

export const CellItem = styled.div`
  position: absolute;
  transform-origin: top left;
  transform: translate3d(35px, 25px, 10px);
  //scale(${({ mediaScale }) => mediaScale});
  z-index: 0;
  width: ${({ width, mediaScale }) => mediaScale * width - 10}px;
  height: ${({ height, mediaScale }) => mediaScale * height - 10}px;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  transition: left 0.7s ease 0s, top 0.7s ease 0s, width 0.7s, height 0.7s;
  &:hover ${CardFace} {
    border: 1px solid var(--color-accent-background);
  }
  &:hover > ${CardWrapper} {
    transform: ${({ rotatable }) =>
      rotatable ? "rotateY(180deg)" : "initial"};

    border-radius: 4px;
  }
`;

export const FrontOfCard = styled(CardFace)`
  overflow: hidden;
  &::before {
    content: "";
    z-index: 1000;
    height: 20%;
    width: 30%;
    top: -10%;
    right: -15%;
    background: var(--color-accent-background);
    position: absolute;
    transform: rotate(45deg);
  }
`;

export const DownloadProgress = styled(ProgressBar)`
  width: 100%;
  height: 9px;
  position: absolute;
  overflow: hidden;
  z-index: 10;
  bottom: -4.5px;
  left: 0px;
  border-radius: 0px;
`;
export const BackDownloadProgress = styled(ProgressBar)`
  width: 100%;
  height: 15px;
  position: relative;
  overflow: hidden;
  border-radius: 2px;
  margin-top: 5px;
  background: rgba(255, 255, 255, 0.1);
`;

export const BackOfCard = styled(CardFace)`
  transform: rotateY(180deg);
  background-color: #1f2326;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("${({ backdrop }) => backdrop}") no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    opacity: 0.25;
  }
  padding: 5px;
`;

export const Poster = styled.img`
  width: 100%;
  height: 100%;
  backface-visibility: none;
`;

export const Title = styled(Link)`
  text-decoration: none;
  padding: 3px;
  display: block;
  white-space: nowrap;
  cursor: inherit;
  width: 75%;
  color: white;
  font-size: 14px;
  font-weight: lighter;
  text-overflow: ellipsis;
  overflow: hidden;
  z-index: 100;
  border-radius: 3px;
  &:hover {
    text-decoration: underline;
  }
  cursor: pointer;
`;

export const BackTitle = styled(Title)`
  background: rgba(0, 0, 0, 0.5);
  text-overflow: initial;
  overflow: initial;
  white-space: initial;
  text-align: center;
  display: inline-block;
  width: 100%;
  z-index: 100;
  color: white;
`;

export const TorrentInfo = styled.div`
  padding: 10px;
  font-size: 15px;
  color: whit;
`;
export const Stat = styled.p`
  margin-bottom: 5px;
`;
export const StatLabel = styled.span``;
export const StateValue = styled.span``;

export const SpeedTimeLine = styled(TimeLine)`
  width: 100%;
  height: 30px;
`;
