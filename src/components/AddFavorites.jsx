import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { FaHeart } from 'react-icons/fa'; 

const AddFavorites = () => {
  const { favourite, removeMovieFromFavorite } = useContext(GlobalContext);

  const handleRemoveFromFavorites = (movie) => {
    removeMovieFromFavorite(movie);
  };

  return (
    <div className="bg-dark p-4 text-white">
      <h2>Your Favorites</h2>
      <div className="favorites-grid d-flex">
        {favourite.length === 0 ? (
          <p>No favorites added yet.</p>
        ) : (
          favourite.map((movie) => (
            <div key={movie.id} className="card Movie-card">
              <img
                src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                className="card-img-top"
                alt={movie.title}
              />
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p>{movie.release_date}</p>
              </div>
              <div className="card-footer bg-transparent border-success">
                <FaHeart
                  color="red" 
                  onClick={() => handleRemoveFromFavorites(movie)}
                />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AddFavorites;