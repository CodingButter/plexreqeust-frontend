import { BackgroundBar, Progress, Percentage } from "./ProgressBar.elements";

const ProgressBar = ({ showPercent, progress, className }) => {
  const percentage = Math.floor(progress * 10000) / 100;
  return (
    <BackgroundBar className={className}>
      <Progress progress={progress}></Progress>
      {showPercent && <Percentage>{percentage}%</Percentage>}
    </BackgroundBar>
  );
};

export default ProgressBar;
