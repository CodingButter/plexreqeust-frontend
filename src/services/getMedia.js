import { getMovies as Movies, getMovieDetails } from "./getMovies";
import { getShows as Shows, getShowDetails } from "./getShows";
import { getPlex as Plex } from "./getPlex";

const normalizeMedia = (result) => {
  console.log(result);
  result.title = result.title || result.name;
  result.poster =
    (result.poster_path && result.poster_path["w185"]) ||
    result.poster_path ||
    `https://via.placeholder.com/185x278`;
  result.release_date = result.release_date || result.first_air_date || "";
  result.year = result.release_date.split("-")[0];
  result.tmdb = result.id;
  if (result.seasons) {
    result.seasons = result.seasons.map((season) => normalizeMedia(season));
  }
  return result;
};

const normalizeMediaResults = (results) => {
  return results.map(normalizeMedia);
};
export const getMovie = async (tmdb) => {
  const response = await getMovieDetails(tmdb);
  return normalizeMedia(response);
};
export const getShow = async (tmdb) => {
  const response = await getShowDetails(tmdb);
  return normalizeMedia(response);
};
export const getMovies = async (query, page) => {
  const response = await Movies(query, page);
  response.results = normalizeMediaResults(response.results);
  return response;
};
export const getShows = async (query, page) => {
  const response = await Shows(query, page);
  response.results = normalizeMediaResults(response.results);
  return response;
};
export const getPlex = async (query, page) => {
  const response = await Plex(query, page);
  response.results = normalizeMediaResults(response.results);
  return response;
};

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
