import { useState, useEffect } from "react";
import { EmbedFrame } from "./TwoEmbed.elements";
const TwoEmbed = ({ tmdb, mediaType, season, episode }) => {
  const [source, updateSource] = useState([]);
  useEffect(() => {
    updateSource(
      `https://www.2embed.ru/embed/tmdb/${
        mediaType === "movie" ? "movie" : "tv"
      }?id=${tmdb}&s=${season}&e=${episode}`
      //"https://google.com"
    );
  }, [tmdb, mediaType, season, episode]);

  return <EmbedFrame src={source} />;
};

export default TwoEmbed;
