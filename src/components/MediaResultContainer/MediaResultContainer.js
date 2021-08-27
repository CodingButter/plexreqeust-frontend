import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import {
  MediaContent,
  MediaResultWrap,
  MediaContainerHeader,
  Button,
  HeaderWrap,
  PageManager,
} from "./MediaResultContainer.elements";
import Media from "../Media/Media";
import settings from "../../bin/defaultsettings.json";
import { useMediaScale } from "../../context/MediaScaleContext";

const map = (value, x1, y1, x2, y2) =>
  ((value - x1) * (y2 - x2)) / (y1 - x1) + x2;

const MediaResultContainer = ({
  totalPages,
  currentPage,
  setPage,
  containerHeader,
  className,
  medialist,
  mediaType,
}) => {
  console.log({ medialist });
  const ref = useRef();
  const [wrapWidth, setWrapWidth] = useState();
  const mediaScale = map(useMediaScale(), 0, 1, 0.65, 1.25);

  const realSize = {
    width: settings.media.mediaSize.width * mediaScale,
    height: settings.media.mediaSize.height * mediaScale,
  };
  const columns = Math.floor(wrapWidth / (realSize.width + 10));
  const wrapHeight =
    Math.ceil(medialist.length / columns) * (realSize.height + 50) + "px";
  const handleResize = (e) => {
    const wrap = ref.current;
    if (wrap) {
      setWrapWidth(wrap.clientWidth);
    }
  };
  const setPreviousPage = () => {
    setPage((current) => current - 1);
  };

  const setNextPage = () => {
    setPage((current) => current + 1);
  };

  const buildPageButtons = (currentPage, totalPages) => {
    var buttons = [];
    var start = Math.max(1, currentPage - 1);
    var end = Math.min(currentPage + 1, totalPages);
    if (start > 1)
      buttons.push(
        <Button
          key={`${containerHeader}-first-page`}
          onClick={(e) => {
            setPage(1);
          }}
          selected={false}
        >
          1..
        </Button>
      );
    for (var i = start; i <= end; i++) {
      buttons.push(
        <Button
          key={`${containerHeader}-page-${i}`}
          data-index={i}
          onClick={(e) => {
            setPage(e.target.getAttribute("data-index"));
          }}
          selected={i === currentPage}
        >
          {i}
        </Button>
      );
    }
    if (end < totalPages)
      buttons.push(
        <Button
          key={`${containerHeader}-last-page`}
          onClick={(e) => {
            setPage(totalPages);
          }}
          selected={false}
        >
          ..{totalPages}
        </Button>
      );
    return buttons;
  };
  useEffect(() => {
    if (ref.current) {
      const resizeEvent = window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", resizeEvent);
    }
  }, []);
  return (
    <>
      <MediaContainerHeader>
        <HeaderWrap>{containerHeader}</HeaderWrap>
        <PageManager>
          {currentPage > 1 && <Button onClick={setPreviousPage}>{"<<"}</Button>}
          {buildPageButtons(currentPage, totalPages)}
          {currentPage !== totalPages && (
            <Button onClick={setNextPage}>{">>"}</Button>
          )}
        </PageManager>
      </MediaContainerHeader>
      <MediaResultWrap className={`${className} media-result-wrapper`}>
        <MediaContent ref={ref} className="media-content">
          <div
            style={{
              height: wrapHeight,
              position: "relative",
              display: "block",
            }}
          >
            {medialist.map((media, index) => {
              console.log(media);
              if (media.title)
                return (
                  <Media
                    style={{
                      left: `${(index % columns) * realSize.width}px`,
                      top: `${
                        Math.floor(index / columns) * (realSize.height + 50)
                      }px`,
                      width: `${settings.media.mediaSize.width * mediaScale}px`,
                      height: `${
                        settings.media.mediaSize.height * mediaScale
                      }px`,
                    }}
                    mediaType={media.mediaType || mediaType}
                    mediaScale={mediaScale}
                    key={media.title + index}
                    media={media}
                    tmdb={media.tmdb}
                  />
                );
              return "";
            })}
          </div>
        </MediaContent>
      </MediaResultWrap>
    </>
  );
};

export default styled(MediaResultContainer)`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  min-height: 0;
`;
