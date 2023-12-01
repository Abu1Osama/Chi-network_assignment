import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../MovieDetails/MovieDetails.scss";

function MovieDetails() {
  const { id } = useParams();
  const handleImageError = (event) => {
    event.target.src =
      "https://imgs.search.brave.com/Uc6y-cUJSMAuIjnQyg9hpUeaptffx2h2sPv7X6uVRYU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE4/MjIxMDkzMC9waG90/by9wb3N0LWFwb2Nh/bHlwc2UtY2luZW1h/dGljLW1vdmllLXBv/c3Rlci5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9aDhTcHUz/TzdPNXJORU5mMElo/U25xcl8wbURSb3FL/UmJRdmk0TDUtREhI/OD0";
  };

  const [movie, setMovieDetail] = useState(null);

  useEffect(() => {
    const fetchMovieDetail = async () => {
      const url = await fetch(
        `https://www.omdbapi.com/?apikey=7d0ca25e&i=${id}`
      );
      const res = await url.json();
      setMovieDetail(res);
    };

    fetchMovieDetail();
  }, [id]);
  function Format(Runtime) {
    const hours = Math.floor(Number(Runtime) / 60);
    const minutes = Number(Runtime) % 60;
    return `${hours}hr ${minutes}min`;
  }
  console.log(movie);

  function Randomimage(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const randomName = arr[randomIndex];

    return randomName;
  }
  let watcharr = [
    "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Disney%2B_Hotstar_logo.svg/2560px-Disney%2B_Hotstar_logo.svg.png",
  ];

  const addToWatchlist = () => {
    const currentWatchlist =
      JSON.parse(localStorage.getItem("watchlist")) || [];

    if (!currentWatchlist.find((item) => item.imdbID === movie.imdbID)) {
      currentWatchlist.push(movie);

      localStorage.setItem("watchlist", JSON.stringify(currentWatchlist));
    }
  };
  return (
    <div className="moviedetails" id="moviedetails">
      {movie ? (
        <div className="moviedetails-mid">
          <div className="top">
            <h1>{movie.Title}</h1>
            <p>
              <span> {movie.Released} </span>
              <span>{movie.language}</span>
              <span>Runtime:- {movie.Runtime}</span>
            </p>
          </div>

          <div className="hero-img">
            <div className="img">
              <img src={movie.Poster} alt="" onError={handleImageError} />
            </div>
            <div className="movies-detail">
              <div className="genre">
                <p>{movie.Genre}</p>
                <p>{movie.Plot}</p>
              </div>
              <div className="act-details actor">
                <h3>Casts</h3>
                {movie.Actors.split(", ").map((item, index) => (
                  <button>
                    <p key={index}>{item}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="desc">
            <div className="add">
              <button onClick={addToWatchlist}>
                <i class="fa-solid fa-plus"></i>
                <div>
                  <h4>Add to Watchlist</h4>
                  <p>Added by {movie.votes}k users</p>
                </div>
              </button>
            </div>
            <div className="watch">
              <h4>Streaming On</h4>
              <img src={Randomimage(watcharr)} alt="" />
            </div>
            <div className="details-bottom">
              <div>
                <p>
                  <span style={{ color: "#f5c518" }}>
                    <i
                      class="fa-solid fa-star"
                      style={{ color: " #ffeb0a" }}
                    ></i>{" "}
                    {movie.imdbRating}
                  </span>
                  /10
                </p>
              </div>
              <div>
                <i class="fa-regular fa-star" style={{ color: "#0f62f0" }}></i>
                <p style={{ color: "#0f62f0" }}>Rate this</p>
              </div>
              <div>
                <p>
                  CRITICS <br /> REVIEWS
                </p>
              </div>
            </div>
          </div>

          <div className="act-details">
            <h3>Writers</h3>
          </div>
          <div className="act-details">
            <h3>Directors</h3>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default MovieDetails;
