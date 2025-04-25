import React, { useState, useEffect } from "react";
import { CiStar } from "react-icons/ci";
import Search from "./Search";
import AddFavorites from "./AddFavorites";

const Card = () => {
  const [movieList, setMovieList] = useState([]);
  const [search, setSearch] = useState("");

  const getMovie = () => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=2de723528fdd0acf0a9b237c0cac6561"
    )
      .then((res) => res.json())
      .then((json) => setMovieList(json.results));
  };

  useEffect(() => {
    getMovie();
  }, []);
  console.log(movieList);

  return (
    <div className="bg-dark p-4">
      <Search search={search} setSearch={setSearch} />
      <div className="line-1-compo m-4 p-4 bg-dark">
        {movieList.map((movie) => {
          return (
            <div className="card Movie-card">
              <img
                src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                className="card-img-top"
              ></img>
              <div className="overlay">
                <AddFavorites/>
              </div>

              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p>{movie.release_date}</p>
              </div>
              <div class="card-footer bg-transparent border-success">
                <CiStar />
                {movie.vote_average}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Card;
