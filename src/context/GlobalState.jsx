import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
  favourite: [],
};

// Create context
export const GlobalContext = createContext(initialState);

// Global provider
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Add movie to favorites
  const addMovieToFavourite = (movie) => {
    dispatch({ type: 'ADD_MOVIE_TO_FAVORITE', payload: movie });
  };

  // Remove movie from favorites
  const removeMovieFromFavorite = (movie) => {
    dispatch({ type: 'REMOVE_MOVIE_FROM_FAVORITE', payload: movie });
  };

  return (
    <GlobalContext.Provider
      value={{
        favourite: state.favourite,
        addMovieToFavourite,
        removeMovieFromFavorite,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};