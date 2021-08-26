import TMDB from "./TMDB";

const tmdb = new TMDB(process.env.REACT_APP_TMDB_API_KEY);

export const getShows = async (query, page = 1) => {
  return await tmdb.search("/tv", { query, page });
};

export const getShowDetails = async (tv_id) => {
  return await tmdb.getDetails("/tv", tv_id);
};
