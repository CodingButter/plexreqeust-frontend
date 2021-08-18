import React from "react";

const MoviesContext = React.createContext();
const MoviesUpdateContext = React.createContext();

export const useMovies = () => {
  return React.useContext(MoviesContext);
};

export const useUpdateMovies = () => {
  return React.useContext(MoviesUpdateContext);
};

export const MoviesProvider = ({ children }) => {
  const [movies, updateMovies] = React.useState([]);

  return (
    <MoviesContext.Provider value={movies}>
      <MoviesUpdateContext.Provider value={updateMovies}>
        {children}
      </MoviesUpdateContext.Provider>
    </MoviesContext.Provider>
  );
};
