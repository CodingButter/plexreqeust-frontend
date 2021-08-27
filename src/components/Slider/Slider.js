import styled from "styled-components";
import { useRef, useEffect } from "react";
import "../../services/utilities";
const Slider = ({
  sliderValue = 0.5,
  updateSliderValue = () => {},
  steps = 10,
  angle = 0,
}) => {
  const handleRef = useRef();
  const containerRef = useRef();

  useEffect(() => {
    var canMove = false;
    const handleUpdate = (value) => {
      updateSliderValue(value);
    };

    if (containerRef.current && handleRef.current) {
      const container = containerRef.current;
      const handle = handleRef.current;
      const keyPressListener = container.addEventListener(
        "keypress",
        (e) => {}
      );
      const mouseDownListener = handle.addMultiEventListener(
        ["mousedown", "touchstart"],
        (e) => {
          if (!e.touches) e.preventDefault();
          canMove = true;
        }
      );
      const mouseUpListener = document.body.addMultiEventListener(
        ["mouseup", "touchend"],
        (e) => {
          if (!e.touches) e.preventDefault();
          canMove = false;
        }
      );
      const mouseMoveListener = document.body.addMultiEventListener(
        ["mousemove", "touchmove"],
        (e) => {
          if (canMove) {
            const rect = container.getBoundingClientRect();
            var normalize = 0.01 * (rect.right - rect.left);
            var percent;
            var limited;
            const x = e.clientX || e.touches[0].clientX;
            percent = (x - rect.left) / normalize;
            limited = Math.min(Math.max(percent, 0), 100);
            handle.style.left = limited + "%";
            const snapped = ~~(limited / ~~(100 / steps)) * ~~(100 / steps);
            handleUpdate(snapped / 100);
          }
        }
      );

      return () => {
        if (container.removeListener && handleRef.removeListener) {
          container.removeListener("keypress", keyPressListener);
          handle.removeMultiListener(
            ["mousedown", "touchdown"],
            mouseDownListener
          );
          document.body.removeMultiListener(
            ["mouseup", "touchend"],
            mouseUpListener
          );
          document.body.removeMultiListener(
            ["mousemove", "touchmove"],
            mouseMoveListener
          );
        }
      };
    }
    return;
  }, [steps, updateSliderValue]);

  return (
    <Container ref={containerRef} className="slider-container">
      <Track className="slider-track" />
      <Handle
        sliderValue={sliderValue}
        ref={handleRef}
        className="slider-handle"
      />
    </Container>
  );
};

export default Slider;

const Container = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
`;

const Track = styled.div`
  background-color: hsla(0, 0%, 100%, 0.2);
  height: 2px;
  width: 100%;
  overflow: hidden;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const Handle = styled.div`
  cursor: pointer;
  box-shadow: 0 0 2px rgb(0 0 0 / 35%);
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #ddd;
  margin-left: -9px;
  top: calc(50% - 9px);
  left: ${({ sliderValue }) => sliderValue * 100}%;
  pointer-events: auto;
  position: absolute;
`;
