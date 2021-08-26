import styled from "styled-components";
import Slider from "./Slider/Slider";
import {
  useMediaScale,
  useUpdateMediaScale,
} from "../context/MediaScaleContext";
const PageHeader = ({ children }) => {
  const mediaScale = useMediaScale();
  const updateMediaScale = useUpdateMediaScale();
  const handleUpdateValue = (value) => {
    updateMediaScale(value);
  };

  return (
    <Wrapper>
      <Container className="pageheader-container">
        <LeftSide>{children[0]}</LeftSide>
        <RightSide>
          {children[1]}
          <SliderWrap>
            <Slider
              sliderValue={mediaScale}
              updateSliderValue={handleUpdateValue}
            />
          </SliderWrap>
        </RightSide>
      </Container>
    </Wrapper>
  );
};

export default PageHeader;
const Wrapper = styled.div`
  bottom: 0;
  display: flex;
  flex-direction: row;
  font-family: Open Sans Regular, Helvetica Neue, Helvetica, Arial, sans-serif;
  left: 0;
  overflow: hidden;
  position: relative;
  right: 0;
  top: 0;
  align-items: center;
  box-shadow: 0 3px 6px 0 rgb(0 0 0 / 15%);
  color: hsla(0, 0%, 100%, 0.75);
  display: flex;
  flex-shrink: 0;
  font-size: 20px;
  height: 60px;
  justify-content: space-between;
  padding-left: 40px;
  padding-right: 25px;
  z-index: 1;
`;

const SliderWrap = styled.div`
  width: 75px;
  height: 100%;
  position: relative;
`;

const Side = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  color: white;
`;

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  height: 100%;
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
