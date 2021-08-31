var torrents = { active: [], qued: [] };
const getActiveTorrents = () => {
  return torrents;
};
export default getActiveTorrents;

const plexFetch = async () => {
  const resp = await fetch(
    `${process.env.REACT_APP_PLEX_REQUEST_SERVER}/movies`
  );
  const activities = await resp.json(function (k, v) {
    return typeof v === "object" || isNaN(v) ? v : parseInt(v, 10);
  });
  Object.keys(localStorage).forEach((key) => {
    if (key.includes(".downloadSpeed")) {
      const localtmdb = key.replace(".downloadSpeed", "");
      if (!activities.map(({ tmdb }) => tmdb).includes(localtmdb)) {
        localStorage.removeItem(key);
      }
    }
  });
  const filtered = activities.map(
    ({
      title,
      poster,
      status,
      downloadSpeed,
      numSeeders,
      connections,
      completedLength,
      totalLength,
      length,
      tmdb,
      mediaType,
      backdrop,
    }) => {
      if (length) totalLength = length;
      return {
        title,
        poster,
        downloadSpeed: parseInt(downloadSpeed),
        numSeeders: parseInt(numSeeders),
        connections: parseInt(connections),
        completedLength: parseInt(completedLength),
        totalLength: parseInt(totalLength),
        status,
        tmdb,
        mediaType,
        backdrop,
      };
    }
  );
  const active = filtered.filter(({ completedLength }) => completedLength > 0);
  const qued = filtered.filter(({ completedLength }) => completedLength === 0);
  const fetchedTorrents = { qued, active };
  if (
    JSON.stringify(torrents) !== JSON.stringify(fetchedTorrents) ||
    (torrents.active.length > 0 && fetchedTorrents.active.length === 0)
  )
    torrents = fetchedTorrents;
};

plexFetch();
setInterval(plexFetch, 5000);
