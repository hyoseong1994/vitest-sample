import { act, renderHook } from "@testing-library/react";
import { useSearch } from "../../hooks/useSearch";
import { describe, expect, test } from "vitest";

describe("Movies", () => {
  test("renders movies correctly", async () => {
    const { result } = renderHook(() => useSearch([movies]));
    const { filteredMovies, searchTerm, setSearchTerm } = result.current;

    expect(searchTerm).toEqual("");
    expect(filteredMovies[0]).toEqual(movies);

    let searchTermMock = "크리에이터";
    act(() => setSearchTerm(searchTermMock));
    const updatedResult = result.current;
    expect(updatedResult.searchTerm).toEqual(searchTermMock);
    expect(updatedResult.filteredMovies[0]).toEqual(movies);

    searchTermMock = "오펜하이머";
    act(() => setSearchTerm(searchTermMock));
    expect(result.current.searchTerm).toEqual(searchTermMock);
    expect(result.current.filteredMovies).toEqual([]);
  });
});

const movies = {
  adult: false,
  backdrop_path: "/kjQBrc00fB2RjHZB3PGR4w9ibpz.jpg",
  genre_ids: [878, 28, 53],
  id: 670292,
  original_language: "en",
  original_title: "The Creator",
  overview:
    "인류를 지키기 위해 만들어진 AI가 LA에 핵폭탄을 터뜨린 후, 인류와 AI 간의 피할 수 없는 전쟁이 시작된다. 전직 특수부대 요원 ‘조슈아’는 실종된 아내의 단서를 얻을지도 모른다는 생각에 전쟁을 끝내기 위한 인류의 작전에 합류한다. 인류를 위협할 강력한 무기와 이를 창조한 ‘창조자’를 찾아 나서고, 그 무기가 아이 모습의 AI 로봇 '알피'란 사실을 알게 되는데… 인간적인가, 인간의 적인가? 10월, SF 블록버스터의 신세계가 펼쳐진다!",
  popularity: 1677.846,
  poster_path: "/vFsSluuzqxR46Ils9ib52ItdE9u.jpg",
  release_date: "2023-09-27",
  title: "크리에이터",
  video: false,
  vote_average: 7.2,
  vote_count: 1036,
};
