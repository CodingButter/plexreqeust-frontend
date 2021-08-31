import { useEffect, useRef } from "react";
import { CanvasWrapper, Canvas, Label } from "./TimeLine.elements";
import { kbConversion } from "../../services/utilities";
const TimeLine = ({
  className,
  valueArray,
  valueText,
  range,
  backgroundColor,
  strokeColor,
}) => {
  const canvasRef = useRef();
  const [unit, value] = valueText;
  useEffect(() => {
    const sortedArray = [...valueArray].sort((a, b) => b - a);
    const maxRange = sortedArray[0];
    const canvas = canvasRef.current;
    canvas.width = 200;
    canvas.height = 50;
    const normalize = canvas.height / maxRange;
    const offset = canvas.width / range;
    const ctx = canvas.getContext("2d");
    ctx.globalAlpha = 0.3;
    ctx.fillStyle = backgroundColor || "#fff";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.globalAlpha = 1;
    ctx.strokeStyle = strokeColor || "yellow";
    ctx.lineWidth = 1;
    ctx.moveTo(canvas.width, valueArray[0] * normalize);
    ctx.beginPath();
    for (var index = 0; index < valueArray.length; index++) {
      const value = valueArray[index];
      ctx.lineTo(
        canvas.width - index * offset,
        canvas.height - value * normalize
      );
      console.log({ normalized: value * normalize });
      console.log({ position: canvas.width - index * offset });
    }
    ctx.stroke();

    return () => {};
  }, [valueArray, range, backgroundColor, strokeColor]);
  return (
    <CanvasWrapper className={className}>
      <Canvas ref={canvasRef} />
      <Label>
        {value} {unit}
      </Label>
    </CanvasWrapper>
  );
};
export default TimeLine;
