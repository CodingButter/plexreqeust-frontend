import { useEffect } from "react";
import { Link } from "react-router-dom";
import { kbConversion } from "../../services/utilities";
import { removeTorrent } from "../../services/manageActivity";
import useLocalStorage from "../../hooks/useLocalStorage";
import { Icon } from "../global";
import {
  DownloadProgress,
  BackDownloadProgress,
  BackOfCard,
  BackTitle,
  CardWrapper,
  CellItem,
  FrontOfCard,
  Poster,
  Title,
  TorrentInfo,
  Stat,
  StatLabel,
  SpeedTimeLine,
  TrashCan,
} from "./Media.elements";

const Media = ({
  mediaType,
  mediaScale,
  media,
  style,
  className,
  rotatable = true,
}) => {
  if (media.completedLength) {
    var progress = media.completedLength / media.totalLength || 0.01;
  }
  const [speedArray, setSpeedArray] = useLocalStorage(
    `${media.tmdb}.downloadSpeed`,
    [parseInt(media.downloadSpeed) || 0]
  );
  const [unit, speed] = kbConversion(media.downloadSpeed || 0);
  const speedCountTotal = 40;
  const sortedArray = [...speedArray].sort((a, b) => b - a);
  const maxRange = sortedArray[0];

  useEffect(() => {
    if (media.downloadSpeed > 0) {
      setSpeedArray((previousSpeedArray) => {
        const updateArray = previousSpeedArray.slice(0, speedCountTotal);
        updateArray.unshift(media.downloadSpeed);
        return updateArray;
      });
    }
  }, [media, setSpeedArray]);
  return (
    <CellItem
      rotatable={rotatable}
      className={className}
      mediaScale={mediaScale}
      style={style}
    >
      <CardWrapper>
        <FrontOfCard>
          {progress && <DownloadProgress progress={progress} />}
          <Poster src={media.poster} />
        </FrontOfCard>
        <BackOfCard backdrop={media.backdrop}>
          <TrashCan
            data-uuid={media.uuid}
            onClick={(e) => {
              removeTorrent(media.uuid);
            }}
          >
            {" "}
            <Icon iconName="trashcan" />
          </TrashCan>
          <BackTitle title={media.title}>{media.title}</BackTitle>
          {progress && (
            <BackDownloadProgress showPercent={true} progress={progress} />
          )}
          {(media.downloadSpeed > 0 || maxRange > 0) &&
            progress &&
            speedArray.length > 0 && (
              <SpeedTimeLine
                valueText={[unit, speed]}
                valueArray={speedArray}
                range={speedCountTotal}
              />
            )}
          <TorrentInfo>
            <Stat>
              <StatLabel></StatLabel>
            </Stat>
          </TorrentInfo>
        </BackOfCard>
      </CardWrapper>
      {rotatable && (
        <Title to={`/${mediaType}/${media.tmdb}`} title={media.title}>
          {media.title}
        </Title>
      )}
    </CellItem>
  );
};

export default Media;
