import { renderHook, waitFor } from "@testing-library/react";
import { useMovies } from "../../hooks/useMovies";
import { describe, expect, test } from "vitest";

describe("useMovies", () => {
  test("초기값 테스트", async () => {
    const { result } = renderHook(() => useMovies());

    expect(result.current.isLoading).toBe(true);
    expect(result.current.movies).toBeUndefined();
    expect(result.current.error).toBeNull();
  });
  test("변경값 테스트", async () => {
    const { result } = renderHook(() => useMovies());

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
      expect(result.current.movies).toBeDefined();
      expect(result.current.error).toBeNull();
    });
  });
});
