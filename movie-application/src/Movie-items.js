import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import "./requests";
import axios from "./axios";
import "./Movie.css";

const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?&api_key=461fa54bb20ff05c3d6d3f2c61abf4b1&query=";

function MovieList({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      getMovies(SEARCH_API + searchTerm);
      setSearchTerm("");
    }
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="movie-container">
      <div className="title-container">
        <h2>{title}</h2>
        <header>
          <form onSubmit={handleOnSubmit}>
            <input
              className="search"
              type="search"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleOnChange}
            />
          </form>
        </header>
      </div>
      {movies.length > 0 &&
        movies.map((movie) => <Movie key={movie.id} {...movie} />)}{" "}
    </div>
  );
}

export default MovieList;
