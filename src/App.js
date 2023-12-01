import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import { useEffect, useRef, useState } from "react";
import MovieList from "./Components/MovieList/MovieList";
import { Route, Router, Routes, Switch } from "react-router-dom";
import Favourite from "./Pages/Favourites/Favourite";
import MovieDetails from "./Components/MovieDetails/MovieDetails";
import { Toaster } from "react-hot-toast";

function App() {
  let initial = useRef(true);
  const [searchValue, setSearchValue] = useState();
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [movNotFound, setMovNotFound] = useState(false);
  console.log(movieList);

  const handleSearchValue = (value) => {
    setSearchValue(value);
    setIsLoading(true);
  };

  const movieData = async () => {
    const url = await fetch(
      "https://www.omdbapi.com/?apikey=7d0ca25e&s=hero" + searchValue
    );
    const res = await url.json();

    setMovieList(await res.Search);

    setIsLoading(false);

    if (res.Response === "False") {
      setMovNotFound(true);
    } else {
      setMovNotFound(false);
    }
  };

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      setIsLoading(false);
    } else if (searchValue === "") {
      setMovieList("");
      setIsLoading(false);
    } else {
      movieData();
    }
  }, [searchValue]);

  return (
    <div>
      <Header searchData={handleSearchValue} />
      <Routes>
        <Route path="/" element={<MovieList movieList={movieList} />} />
        <Route path="/details/:id" element={<MovieDetails />} />
        <Route path="/fav" element={<Favourite />} />
        {/* <Route path="/auth" element={<Auth/>} /> */}
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
