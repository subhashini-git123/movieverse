import React, { useState, useEffect, useContext } from "react";
import Card from "./Card";
import { GlobalContext } from "../context/GlobalState";

const Home = () => {
  const { addMovieToFavourite, favourite, removeMovieFromFavorite } =
    useContext(GlobalContext);
  
  const [movieList, setMovieList] = useState([]);

  const getMovies = () => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=2de723528fdd0acf0a9b237c0cac6561"
    )
      .then((res) => res.json())
      .then((json) => setMovieList(json.results));
  };

  useEffect(() => {
    getMovies();
  }, []);

  const isFavorite = (movie) => {
    return favourite.some((favMovie) => favMovie.id === movie.id);
  };

  const handleFavoriteClick = (movie) => {
    if (isFavorite(movie)) {
      removeMovieFromFavorite(movie);
    } else {
      addMovieToFavourite(movie);
    }
  };

  return (
    <div>
      <Card
        movieList={movieList}
        handleFavorite={handleFavoriteClick}
        isFavorite={isFavorite}
      />
    </div>
  );
};

export default Home;