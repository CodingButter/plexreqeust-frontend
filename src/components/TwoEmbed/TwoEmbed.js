import { useState, useEffect } from "react";
import { Icon } from "../global";
import { EmbedFrame } from "./TwoEmbed.elements";
const TwoEmbed = ({ tmdb, mediaType, season, episode }) => {
  const [source, updateSource] = useState([]);

  const [showPlayer, setShowPlayer] = useState(false);
  useEffect(() => {
    updateSource(
      `https://www.2embed.ru/embed/tmdb/${
        mediaType === "movie" ? "movie" : "tv"
      }?id=${tmdb}&s=${season}&e=${episode}`
      //"https://google.com"
    );
  }, [tmdb, mediaType, season, episode]);
  return (
    <div onClick={() => setShowPlayer((prev) => !prev)}>
      <Icon iconName={"movies"} />
      {showPlayer && <EmbedFrame allow="fullscreen" src={source} />}
    </div>
  );
};

export default TwoEmbed;
