import TMDB from "./TMDB";

const tmdb = new TMDB(process.env.REACT_APP_TMDB_API_KEY);

export const getMovies = async (query, page = 1) => {
  return await tmdb.search("/movie", { query, page });
};

export const getMovieDetails = async (movie_id) => {
  return await tmdb.getDetails("/movie", movie_id);
};
