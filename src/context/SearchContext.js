import React from "react";

const SearchContext = React.createContext();
const SearchUpdateContext = React.createContext();

export const useSearch = () => {
  return React.useContext(SearchContext);
};

export const useUpdateSearch = () => {
  return React.useContext(SearchUpdateContext);
};

export const SearchProvider = ({ children }) => {
  const [search, updateSearch] = React.useState({
    plex: [],
    movies: [],
    tv: [],
  });

  return (
    <SearchContext.Provider value={search}>
      <SearchUpdateContext.Provider value={updateSearch}>
        {children}
      </SearchUpdateContext.Provider>
    </SearchContext.Provider>
  );
};
