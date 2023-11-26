import { useState, useMemo, Dispatch, SetStateAction } from "react";
import { Result } from "../types/movies";

type UseSearchResult = {
  filteredMovies: Result[];
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
};

export const useSearch = (movies?: Result[]): UseSearchResult => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredMovies = useMemo((): Result[] => {
    if (!searchTerm) return movies || [];
    const lowerTerm = searchTerm.toLowerCase();
    const list =
      movies?.filter((item) => {
        return item.title.toLowerCase().includes(lowerTerm);
      }) || [];
    return list;
  }, [movies, searchTerm]);

  return {
    filteredMovies,
    searchTerm,
    setSearchTerm,
  };
};
