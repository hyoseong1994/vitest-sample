import React from "react";
import TMDBLogo from "../assets/TMDB.svg";
import { useMovies } from "../hooks/useMovies";
import { useSearch } from "../hooks/useSearch";

const Movies: React.FC = () => {
  const { movies, error, isLoading } = useMovies();
  const { filteredMovies, searchTerm, setSearchTerm } = useSearch(
    movies?.results
  );

  return (
    <div>
      <img src={TMDBLogo} className="logo react" alt="React logo" />
      {isLoading && <div>Loading...</div>}
      {error ? <div>Error: {`${error}`}</div> : <></>}
      {!isLoading && !error && (
        <div>
          <div>
            <label htmlFor="search">Search:</label>
            <input
              type="text"
              id="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <ul>
            {filteredMovies?.map((movie) => (
              <li key={movie.id}>
                <article>
                  <img
                    src={"https://image.tmdb.org/t/p/w200/" + movie.poster_path}
                    alt="movie image"
                  />
                  <h2>{movie.title}</h2>
                  <h4>{movie.overview}</h4>
                  <h3>Released on: {movie.release_date}</h3>
                </article>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Movies;
