import { useEffect, useState } from "react";
import { getMovieTorrents, getShowTorrents } from "../../services/PlexFlex";
import styled from "styled-components";
import Loading from "../global/Loading";
const TableBody = styled.tbody`
  display: block;
  overflow: auto;
  height: 100%;
  width: 100%;
  & > tr {
    display: block;
  }
`;

const TableHeader = styled.thead`
  display: block;
  width: 100%;
  & > tr {
    display: block;
  }
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
const TorrentList = ({
  mediaType,
  title,
  year,
  poster,
  tmdb,
  imdb,
  backdrop,
}) => {
  const [torrentList, setTorrentList] = useState([]);
  const confirmDownload = (e) => {
    const title = e.currentTarget.getAttribute("data-title");
    if (window.confirm(`Download ${title}`)) {
      sendMagnet(e);
    }
  };
  const sendMagnet = async (e) => {
    const magnet = e.currentTarget.getAttribute("data-magnet");
    const uuid = tmdb;
    const include = {
      title,
      poster,
      uuid,
      tmdb,
      imdb,
      backdrop,
    };
    const data = { magnet, include, mediaType };
    await fetch(`${process.env.REACT_APP_PLEX_REQUEST_SERVER}/add`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    });
  };

  const handleGetTorrents = async () => {
    const torrents =
      mediaType === "movie"
        ? await getMovieTorrents({ title, year, imdb })
        : await getShowTorrents({ title, year });
    setTorrentList(
      torrents.map(({ title, magnet, size, seeds }) => ({
        title,
        size,
        seeds,
        magnet,
      }))
    );
  };
  useEffect(() => {
    handleGetTorrents();
  }, []);
  return (
    <Container>
      {torrentList.length === 0 && <Loading />}
      {torrentList.length > 0 && (
        <Table>
          <TableHeader>
            <tr>
              <td>Title</td>
              <td>Size</td>
              <td>Seeds</td>
            </tr>
          </TableHeader>
          <TableBody>
            {torrentList.map(({ title, magnet, size, seeds }) => (
              <tr
                key={title}
                data-title={title}
                data-magnet={magnet}
                onClick={confirmDownload}
              >
                <td>{title}</td>
                <td>{size}</td>
                <td>{seeds}</td>
              </tr>
            ))}
          </TableBody>
        </Table>
      )}
    </Container>
  );
};

const Table = styled.table`
  width: 100%;
  height: 100%;
`;

export default TorrentList;
