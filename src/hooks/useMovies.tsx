import { useEffect, useCallback, useState } from "react";
import { Movies } from "../types/movies";

export const useMovies = () => {
  const [movies, setMovies] = useState<Movies>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown>(null);

  const getMovies = useCallback(async () => {
    setIsLoading(true);

    try {
      const domain = "https://api.themoviedb.org";
      const lang = "ko-KR";
      const url = `${domain}/3/discover/movie?language=${lang}&page=1&sort_by=popularity.desc`;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: import.meta.env.VITE_MOVIE_KEY || "not found env",
        },
      };
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }

      const data = await response.json();

      setMovies(data);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  return {
    movies,
    isLoading,
    error,
  };
};
