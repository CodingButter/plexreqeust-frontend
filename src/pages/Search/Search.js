import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getMovies, getShows, getPlex } from "../../services/getMedia";

import MediaResultContainer from "../../components/MediaResultContainer/MediaResultContainer";
import PageHeader from "../../components/PageHeader";
//import { useSearch } from "../../context/SearchContext";
import { ResultPageContainer } from "./Search.elements";

const Search = () => {
  //const { active, qued } = useSearch();
  //const [plexPageNumber, updateplexPageNumber] = useState(1);
  const [moviesPageNumber, updateMoviesPageNumber] = useState(1);
  const [showsPageNumber, updateShowsPageNumber] = useState(1);
  //const [plexResults, updatePlexResults] = useState({ results: [] });
  const [moviesResults, updateMoviesResults] = useState({ results: [] });
  const [showsResults, updateShowsResults] = useState({ results: [] });

  const { pathname } = useLocation();
  const [blank, blank2, searchQuery] = pathname.split("/");
  console.log(blank, searchQuery);
  const handleRequest = async (mediaType, searchQuery, page) => {
    var response;
    switch (mediaType) {
      case "plex":
        response = await getPlex(searchQuery, page);
        break;
      case "movies":
        response = await getMovies(searchQuery, page);
        break;
      default:
        response = await getShows(searchQuery, page);
        break;
    }
    return response;
  };

  useEffect(() => {
    updateMoviesPageNumber(1);
    updateShowsPageNumber(1);
    //updatePlexPageNumber(1);
  }, [searchQuery]);

  useEffect(() => {
    handleRequest("movies", searchQuery, moviesPageNumber).then(
      updateMoviesResults
    );
    return () => {
      updateMoviesResults({ results: [] });
    };
  }, [searchQuery, moviesPageNumber]);

  useEffect(() => {
    handleRequest("shows", searchQuery, showsPageNumber).then(
      updateShowsResults
    );
    return () => {
      updateShowsResults({ results: [] });
    };
  }, [searchQuery, showsPageNumber]);
  return (
    <>
      <PageHeader className="page-header">
        <span>Search Results</span>
        <span></span>
      </PageHeader>
      <ResultPageContainer className="result-page-wrap">
        {moviesResults.results.length > 0 && (
          <MediaResultContainer
            currentPage={moviesResults.page}
            totalPages={moviesResults.total_pages}
            setPage={updateMoviesPageNumber}
            containerHeader="Movies"
            mediaType="movie"
            medialist={moviesResults.results}
          />
        )}
        {showsResults.results.length > 0 && (
          <MediaResultContainer
            currentPage={showsResults.page}
            totalPages={showsResults.total_pages}
            setPage={updateShowsPageNumber}
            containerHeader="Shows"
            mediaType="show"
            medialist={showsResults.results}
          />
        )}
      </ResultPageContainer>
    </>
  );
};

export default Search;
