import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getMovie, getShow } from "../../services/getMedia";

import PageHeader from "../../components/PageHeader";
import {
  ResultPageContainer,
  MediaDetailSection,
  TorrentSection,
} from "./MediaDetails.elements";
import Media from "../../components/Media/Media";
import settings from "../../bin/defaultsettings.json";
import TorrentList from "../../components/TorrentList/TorrentList";
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
          response = await getMovie(tmdb);
          break;
        default:
          response = await getShow(tmdb);
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
