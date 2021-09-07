export const removeTorrent = async (uuid) => {
  const resp = await fetch(
    `${process.env.REACT_APP_PLEX_REQUEST_SERVER}/remove`,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ uuid }),
    }
  );
  return await resp.json();
};
