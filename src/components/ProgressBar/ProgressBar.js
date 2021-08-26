import { BackgroundBar, Progress } from "./ProgressBar.elements";

const ProgressBar = ({ progress, className }) => {
  return (
    <BackgroundBar className={className}>
      <Progress progress={progress}></Progress>
    </BackgroundBar>
  );
};

export default ProgressBar;
