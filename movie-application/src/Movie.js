import React from "react";
import "./Movie.css";

const IMG_API = "https://image.tmdb.org/t/p/w1280";
const alternate_img =
  "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80";

const setVoteClass = (vote) => {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 6) {
    return "orange";
  } else {
    return "red";
  }
};

const setHiddenClass = (vote) => {
  if (vote === 0) {
    return "hidden";
  }
};

function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}

const Movie = ({ id, title, poster_path, overview, vote_average }) => (
  <div className={`movie ${setHiddenClass(vote_average)}`}>
    <img
      src={poster_path ? IMG_API + poster_path : alternate_img}
      alt={title}
    />

    <div className="movie-info">
      <h3>{title}</h3>
      <span className={`tag ${setVoteClass(vote_average)}`}>
        {vote_average}
      </span>
    </div>

    <div className="movie-over">
      <h2>Overview:</h2>
      <p>{truncate(overview, 550)}</p>
    </div>
  </div>
);

export default Movie;
