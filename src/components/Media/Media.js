import { Link } from "react-router-dom";
import {
  DownloadProgress,
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
    var progress = media.completedLength / media.totalLength || 0;
  }
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
        <BackOfCard>
          <BackTitle title={media.title}>{media.title}</BackTitle>
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
