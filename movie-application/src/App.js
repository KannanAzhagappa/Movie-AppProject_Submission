import { React, Fragment } from "react";
import "./App.css";
import Nav from "./Nav";
import Banner from "./Banner";
import Row from "./Row";
import requests from "./requests";
import MovieList from "./Movie-items";
import Footer from "./Footer";
import Media from "react-media";

function App() {
  return (
    <Media
      queries={{
        small: "(max-width: 430px)",
        acceptable: "(min-width: 431px)",
      }}
    >
      {(matches) => (
        <Fragment>
          {matches.small && (
            <p>The screen is too small!!! Please re-size the screen</p>
          )}
          {matches.acceptable && (
            <div className="app">
              <Nav />
              <Banner />
              <MovieList
                title="Popular Movies"
                fetchUrl={requests.fetchPopular}
              />
              <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
              <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
              <Footer />
            </div>
          )}
        </Fragment>
      )}
    </Media>
  );
}

export default App;
