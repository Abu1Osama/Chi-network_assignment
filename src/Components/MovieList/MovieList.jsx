import React, { useState } from "react";

import "../MovieList/MovieList.scss";
import { Link, useNavigate } from "react-router-dom";

function MovieList({ movieList }) {
  const [open, setopen] = useState();
  const handleImageError = (event) => {
    // Replace the broken image source with a static image source
    event.target.src =
      "https://imgs.search.brave.com/Uc6y-cUJSMAuIjnQyg9hpUeaptffx2h2sPv7X6uVRYU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE4/MjIxMDkzMC9waG90/by9wb3N0LWFwb2Nh/bHlwc2UtY2luZW1h/dGljLW1vdmllLXBv/c3Rlci5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9aDhTcHUz/TzdPNXJORU5mMElo/U25xcl8wbURSb3FL/UmJRdmk0TDUtREhI/OD0";
  };
const navigate=useNavigate()
const movetoDetails=(item)=>{
  navigate(`/details/${item}`)
}
console.log("first")
  return (
    <div className="MovieList" id="MovieList">
      {movieList && movieList.length > 0 ? (
        movieList.map((item) => (
          <div className="movie-content" key={item.imdbID} onClick={()=>movetoDetails(item.imdbID)}>
            <img
              src={item.Poster}
              alt={item.Title}
              onError={handleImageError}
            />
            <strong>{item.Title}</strong>
          </div>
     
        ))
      ) : (
        <p>No movies found</p>
      )}
    </div>

  );
}

export default MovieList;
