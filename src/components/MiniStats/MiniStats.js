import { useActivity } from "../../context/ActivityContext";
import {
  Stats,
  DownloadSpeed,
  Unit,
  DownloadProgress,
} from "./MiniStats.elements";
import { kbConversion } from "../../services/utilities";
const MiniStats = ({ className }) => {
  const { active } = useActivity();
  var downloadSpeed = 0;
  var completedLength = 0;
  var totalLength = 0;
  active.forEach((torrent) => {
    if (torrent.downloadSpeed) downloadSpeed += parseInt(torrent.downloadSpeed);
    completedLength += parseInt(torrent.completedLength);
    totalLength += parseInt(torrent.totalLength);
  });

  var progress = completedLength / totalLength;
  if ((progress === 0) | isNaN(progress)) progress = 0.01;
  const [unit, speed] = kbConversion(downloadSpeed);
  return (
    <Stats title={`${parseInt(progress * 100)}%`} className={className}>
      <DownloadSpeed>
        {speed}
        <Unit>{unit}</Unit>
      </DownloadSpeed>
      <DownloadProgress progress={progress} />
    </Stats>
  );
};

export default MiniStats;
