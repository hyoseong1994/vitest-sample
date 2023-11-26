import { render, screen, userEvent, waitFor } from "../../utils/test-utils";
import Movies from "../../page/Movie";
import { describe, expect, test } from "vitest";

describe("Movies Component", () => {
  test("renders initial loading state", async () => {
    render(<Movies />);

    expect(screen.queryByText("Loading...")).toBeDefined();
    expect(screen.queryByText(/Error:/i)).toBeNull();
  });
  test("renders movies after data fetch", async () => {
    render(<Movies />);

    await waitFor(() => expect(screen.queryByText("Loading...")).toBeNull());

    const creatorText = "크리에이터";
    const openheimerText = "오펜하이머";

    expect(screen.getByText(creatorText)).toBeInTheDocument();
    expect(screen.getByText(openheimerText)).toBeInTheDocument();

    const searchInput = screen.getByLabelText("Search:");
    expect(searchInput).toBeInTheDocument();

    await userEvent.type(searchInput, openheimerText);

    await waitFor(() =>
      expect(screen.getByText(openheimerText)).toBeInTheDocument()
    );
  });
});
