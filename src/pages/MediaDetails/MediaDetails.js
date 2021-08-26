import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getMovie, getShow } from "../../services/getMedia";

import MediaResultContainer from "../../components/MediaResultContainer/MediaResultContainer";
import PageHeader from "../../components/PageHeader";
import { ResultPageContainer } from "./MediaDetails.elements";
import Media from "../../components/Media/Media";
import settings from "../../bin/defaultsettings.json";
const MediaDetails = () => {
  const [details, setDetails] = useState();
  const { pathname } = useLocation();
  const [base, mediaType, tmdb] = pathname.split("/");
  console.log(tmdb);
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

  useEffect(() => {
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
          <Media
            media={details}
            title={details.title}
            poster={details.poster_path}
            mediaScale={1}
            mediaType={mediaType}
            rotatable={false}
            style={{
              width: `${settings.media.mediaSize.width}px`,
              height: `${settings.media.mediaSize.height}px`,
            }}
          />
        </ResultPageContainer>
      </>
    )) || <></>
  );
};

export default MediaDetails;
