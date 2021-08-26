import styled from "styled-components";
import ProgressBar from "../ProgressBar/ProgressBar";
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
  &::after {
    content: "";
    z-index: 1000;
    height: 3px;
    width: 100%;
    position: absolute;
    bottom: 0px;
    background: #1f2326;
  }
`;

export const CellItem = styled.div`
  position: absolute;
  transform-origin: top left;
  transform: translate3d(25px, 25px, 10px);
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
`;

export const DownloadProgress = styled(ProgressBar)`
  width: 100%;
  height: 9px;
  position: absolute;
  overflow: hidden;
  bottom: -4.5px;
  left: 0px;
  border-radius: 0px;
`;

export const BackOfCard = styled(CardFace)`
  transform: rotateY(180deg);
  background-color: #1f2326;
  padding: 5px;
`;

export const Poster = styled.img`
  width: 100%;
  height: 100%;
  backface-visibility: none;
`;

export const Title = styled(Link)`
  text-decoration: none;
  padding-top: 10px;
  display: inline-block;
  white-space: nowrap;
  cursor: inherit;
  width: 75%;
  color: white;
  font-size: 14px;
  font-weight: lighter;
  text-overflow: ellipsis;
  overflow: hidden;
  &:hover {
    text-decoration: underline;
  }
  cursor: pointer;
`;

export const BackTitle = styled(Title)`
  text-overflow: initial;
  overflow: initial;
  white-space: initial;
  text-align: center;
  width: 100%;
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
