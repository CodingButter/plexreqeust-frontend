import {
  Wrapper,
  AbsolutePositioner,
  CrossFade,
  TextureBackground,
} from "./FullPageBackground.elements";

const FullPageBackground = () => {
  return (
    <Wrapper className="full-page-background-wrapper">
      <AbsolutePositioner className="absolute-positioner">
        <CrossFade className="cross-fade" />
      </AbsolutePositioner>
      <TextureBackground className="texture-background" />
    </Wrapper>
  );
};

export default FullPageBackground;
