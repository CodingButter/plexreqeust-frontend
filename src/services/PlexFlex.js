const headers = {
  "content-type": "application/json",
};

export const getMovieTorrents = async ({ title, year, imdb }) => {
  const response = await fetch(
    `${process.env.REACT_APP_PLEX_REQUEST_SERVER}/search/movies`,
    {
      headers,
      method: "POST",
      body: JSON.stringify({ title, year, imdb }),
    }
  );
  return await response.json();
};

export const getShowTorrents = async ({ title, year }) => {
  const response = await fetch(
    `${process.env.REACT_APP_PLEX_REQUEST_SERVER}/search/shows`,
    {
      headers,
      method: "POST",
      body: JSON.stringify({ title, year }),
    }
  );
  return await response.json();
};
