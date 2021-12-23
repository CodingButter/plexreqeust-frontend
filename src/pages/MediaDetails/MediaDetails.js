import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getShowDetails, getMovieDetails } from "../../services/getMedia";
import PageHeader from "../../components/PageHeader";
import {
  ResultPageContainer,
  MediaDetailSection,
  TorrentSection,
  LeftSide,
  RightSide,
} from "./MediaDetails.elements";
import Media from "../../components/Media/Media";
import settings from "../../bin/defaultsettings.json";
import TorrentList from "../../components/TorrentList/TorrentList";
import TwoEmbed from "../../components/TwoEmbed/TwoEmbed";
const MediaDetails = () => {
  const [details, setDetails] = useState();
  const { pathname } = useLocation();
  const [base, mediaType, tmdb] = pathname.split("/");

  useEffect(() => {
    console.log("rendered");
    const handleRequest = async (mediaType, tmdb) => {
      var response;

      switch (mediaType) {
        case "movie":
          response = await getMovieDetails(tmdb);
          break;
        default:
          response = await getShowDetails(tmdb);
          break;
      }

      return response;
    };
    handleRequest(mediaType, tmdb).then(setDetails);
    return () => {
      setDetails(null);
    };
  }, [mediaType, tmdb]);

  return (
    (details && (
      <>
        <PageHeader className="page-header">
          <span>{`${details.title} (${details.year})`}</span>
          <span></span>
        </PageHeader>
        <ResultPageContainer className="result-page-wrap">
          <MediaDetailSection>
            <LeftSide>
              <Media
                media={details}
                title={details.title}
                poster={details.poster_path}
                mediaScale={1}
                mediaType={mediaType}
                rotatable={false}
                tmdb={tmdb}
                imdb={details.imdb_id}
                style={{
                  width: `${settings.media.mediaSize.width}px`,
                  height: `${settings.media.mediaSize.height}px`,
                }}
              />
            </LeftSide>
            <RightSide>
              <TwoEmbed
                tmdb={tmdb}
                mediaType={mediaType}
                season={1}
                episode={1}
              />
            </RightSide>
          </MediaDetailSection>

          <TorrentSection>
            <TorrentList
              mediaType={mediaType}
              title={details.title}
              year={details.year}
              tmdb={tmdb}
              imdb={details.imdb_id}
              poster={details.poster}
              backdrop={details.backdrop}
            />
          </TorrentSection>
        </ResultPageContainer>
      </>
    )) || <></>
  );
};

export default MediaDetails;
