import { useState, useEffect } from "react";
import { Icon } from "../global";
import { EmbedFrame } from "./TwoEmbed.elements";
const TwoEmbed = ({ tmdb, mediaType, season, episode }) => {
  const [source, updateSource] = useState([]);
<<<<<<< HEAD
  const [showFrame, setShowFrame] = useState(false);
=======
  const [showPlayer, setShowPlayer] = useState(false);
>>>>>>> development
  useEffect(() => {
    updateSource(
      `https://www.2embed.ru/embed/tmdb/${
        mediaType === "movie" ? "movie" : "tv"
      }?id=${tmdb}&s=${season}&e=${episode}`
      //"https://google.com"
    );
  }, [tmdb, mediaType, season, episode]);

<<<<<<< HEAD
  return (
    <>
      {(showFrame && <EmbedFrame src={source} />) || (
        <Icon iconName={"movies"} />
      )}
    </>
  );
=======
  return showPlayer && <EmbedFrame allow="fullscreen" src={source} />;
>>>>>>> development
};

export default TwoEmbed;
