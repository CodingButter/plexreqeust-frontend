import { useEffect, useState } from "react";
import { getMovieTorrents, getShowTorrents } from "../../services/getMedia";
import styled from "styled-components";
import { useHistory } from "react-router";

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

const TorrentList = ({ mediaType, title, year, poster, tmdb }) => {
  const [torrentList, setTorrentList] = useState([]);
  const history = useHistory();
  const sendMagnet = async (e) => {
    console.log(e.currentTarget);
    const magnet = e.currentTarget.getAttribute("data-magnet");
    console.log({
      title,
      poster,
      tmdb,
      magnet,
    });
    await fetch(process.env.REACT_APP_PLEX_REQUEST_SERVER, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        title,
        poster,
        tmdb,
        magnet,
        mediaType,
      }),
    });
    history.push("/activity");
  };

  const handleGetTorrents = async () => {
    const torrents =
      mediaType === "movie"
        ? await getMovieTorrents({ title, year })
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
          <tr key={title} data-magnet={magnet} onClick={sendMagnet}>
            <td>{title}</td>
            <td>{size}</td>
            <td>{seeds}</td>
          </tr>
        ))}
      </TableBody>
    </Table>
  );
};

const Table = styled.table`
  width: 100%;
  height: 100%;
`;

export default TorrentList;