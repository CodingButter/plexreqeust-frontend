import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #3f4245;
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: -1;
`;

export const AbsolutePositioner = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const CrossFade = styled.div`
  position: absolute;
  animation-duration: 600ms;
  background-image: url("/images/479017288a229d836f44.png");
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`;

export const TextureBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url("/images/b38a559594ac52d049ba.png");
  z-index: 2;
`;
