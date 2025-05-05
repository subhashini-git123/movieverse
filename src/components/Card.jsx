

import React from "react";
import { CiStar } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

const Card = ({ movieList,  handleFavorite, isFavorite }) => {
  return (
    <div className="bg-dark p-4">
      <div className="movie-grid m-4 p-4 bg-dark">
        {movieList.map((movie) => (
          <div className="card Movie-card" key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
              className="card-img-top"
              alt={movie.title}
            />
            <div className="overlay">
              <span className="fav-icon"  onClick={() => handleFavorite(movie)}>
                <FaHeart color={isFavorite(movie) ? "red" : "white"} />
              </span>
            </div>

            <div className="card-body">
              <h5 className="card-title">{movie.title}</h5>
              <p>{movie.release_date}</p>
            </div>
            <div className="card-footer bg-transparent border-success">
              <CiStar />
              {movie.vote_average}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;