import { useEffect, useRef } from "react";
import styled from "styled-components";
import { MediaContent, MediaResultWrap } from "./MediaResultContainer.elements";
import Media from "../Media/Media";
const MediaResultContainer = ({ medialist }) => {
  const ref = useRef();

  const handleResize = (e) => {
    const wrap = ref.current;
    if (wrap) {
      wrap.setAttribute("data-width", wrap.clientWidth);
      wrap.setAttribute("data-height", wrap.clientHeight);
    }
  };

  useEffect(() => {
    if (ref.current) {
      const resizeEvent = window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", resizeEvent);
    }
  }, []);
  return (
    <MediaResultWrap className="media-result-wrapper">
      <MediaContent ref={ref} className="media-content">
        <div style={{ display: "contents" }}>
          {medialist.map((media) => {
            if (media.title) return <Media key={media.title} media={media} />;
            return "";
          })}
        </div>
      </MediaContent>
    </MediaResultWrap>
  );
};

export default styled(MediaResultContainer)`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  min-height: 0;
`;
