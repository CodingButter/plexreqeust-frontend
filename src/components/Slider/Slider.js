import styled from "styled-components";
import { useRef, useEffect } from "react";

const Slider = ({ sliderValue, updateSliderValue, steps = 10, angle = 0 }) => {
  let canMove = false;
  const handleRef = useRef();
  const containerRef = useRef();

  const handleUpdate = (value) => {
    updateSliderValue(value);
  };

  useEffect(() => {
    if (containerRef.current && handleRef.current) {
      const container = containerRef.current;
      const handle = handleRef.current;

      const keyPressListener = container.addEventListener(
        "keypress",
        (e) => {}
      );
      const mouseDownListener = handle.addEventListener("mousedown", (e) => {
        e.preventDefault();
        canMove = true;
      });
      const mouseUpListener = window.addEventListener("mouseup", (e) => {
        e.preventDefault();
        canMove = false;
      });
      const mouseMoveListener = window.addEventListener(
        "mousemove",
        (e) => {
          if (canMove) {
            const rect = container.getBoundingClientRect();
            var normalize = 0.01 * (rect.right - rect.left);
            var percent;
            var limited;
            percent = (e.clientX - rect.left) / normalize;
            limited = Math.min(Math.max(percent, 0), 100);
            handle.style.left = limited + "%";
            const snapped = ~~(limited / ~~(100 / steps)) * ~~(100 / steps);
            handleUpdate(snapped / 100);
          }
        },
        [sliderValue, canMove]
      );

      return () => {
        if (container.removeListener && handleRef.removeListener) {
          container.removeListener("keypress", keyPressListener);
          handle.removeListener("mousedown", mouseDownListener);
          window.removeListener("mouseup", mouseUpListener);
          window.removeListener("mousemove", mouseMoveListener);
        }
      };
    }
    return;
  }, []);

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
  margin: 10px;
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
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #ddd;
  margin-left: -6px;
  top: calc(50% - 6px);
  left: ${({ sliderValue }) => sliderValue * 10}%;
  pointer-events: auto;
  position: absolute;
`;
