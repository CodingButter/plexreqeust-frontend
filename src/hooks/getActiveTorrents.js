var torrents = { active: [], qued: [] };
const getActiveTorrents = () => {
  return torrents;
};
export default getActiveTorrents;

const plexFetch = async () => {
  const resp = await fetch(`${process.env.REACT_APP_PLEX_REQUEST_SERVER}/info`);
  const info = await resp.json();
  info.forEach((torrentInfo, index) =>
    Object.keys(torrentInfo).forEach((key) => {
      const v = torrentInfo[key];
      info[index][key] = isNaN(v) ? v : parseInt(v, 10);
    })
  );
  Object.keys(localStorage).forEach((key) => {
    if (key.includes(".downloadSpeed")) {
      const localtmdb = key.replace(".downloadSpeed", "");
      if (!info.map(({ include: { tmdb } }) => tmdb).includes(localtmdb)) {
        localStorage.removeItem(key);
      }
    }
  });
  const deconstructedInfo = info.map((torrent) => {
    const deconstructed = { ...torrent, ...torrent.include };
    delete deconstructed.include;
    return deconstructed;
  });
  console.log(deconstructedInfo);
  const active = deconstructedInfo.filter(
    ({ completedLength }) => completedLength > 0
  );
  const qued = deconstructedInfo.filter(
    ({ completedLength }) => completedLength === 0
  );
  console.log({ active, qued });
  const fetchedTorrents = { qued, active };
  if (
    JSON.stringify(torrents) !== JSON.stringify(fetchedTorrents) ||
    (torrents.active.length > 0 && fetchedTorrents.active.length === 0)
  )
    torrents = fetchedTorrents;
};

plexFetch();
setInterval(plexFetch, 5000);
