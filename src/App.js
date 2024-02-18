import React from 'react';
import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';

import './App.css';
import SearchIcon from './search.svg';

// 855478c7

const API_URL = "http://omdbapi.com?apikey=855478c7";

const movie1 = {
  "Title": "The Avengers",
  "Year": "2012",
  "imdbID": "tt0848228",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
}

const App = () => {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearch] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();

    setMovies(data.Search);
  }

  // useEffect(() => {
  //   searchMovies('Avengers')
  // }, [])


  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearch(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {
        movies?.length > 0
          ? (
            <div className="container">
              {movies.map((movie) => (
                <MovieCard movie={movie} />
              ))}
            </div>
          ) : (
            <div className="empty">
              <h2>No movies found</h2>
            </div>
          )
      }



    </div>

  );

}

export default App