import styled from "styled-components";
import Slider from "../../components/Slider/Slider";
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
