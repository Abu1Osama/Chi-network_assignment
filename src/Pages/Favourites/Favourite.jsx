import React, { useState, useEffect } from "react";
import "../Favourites/Favourite.scss";
import toast from "react-hot-toast";

function Favourite() {
  const [favouriteMovies, setFavouriteMovies] = useState([]);

  useEffect(() => {
    const watchlistData = JSON.parse(localStorage.getItem("watchlist")) || [];

    setFavouriteMovies(watchlistData);
  }, []);
  const handleDelete = (imdbID) => {
    const updatedWatchlist = favouriteMovies.filter(
      (movie) => movie.imdbID !== imdbID
    );

    localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));

    setFavouriteMovies(updatedWatchlist);
    toast.success("Movie Deleted")
  };
  return (
    <div className="fav" id="fav">
      <h1>Favourite</h1>
      {favouriteMovies.length > 0 ? (
        <ul className="moviedata">
          {favouriteMovies.map((movie) => (
            <li key={movie.imdbID}>
              <img src={movie.Poster} alt="" />
              <h3>{movie.Title}</h3>
              <div className="btn">
                <i  onClick={() => handleDelete(movie.imdbID)}class="fa-solid fa-trash"></i>
                <i class="fa-solid fa-eye"></i>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No favourite movies yet.</p>
      )}
    </div>
  );
}

export default Favourite;
