import Defulat from "../../page/Defulat";
import { render, screen, userEvent } from "../../utils/test-utils";

describe("Simple working test", () => {
  it("the title is visible", () => {
    render(<Defulat />);
    expect(screen.getByText(/Vite \+ React/i)).toBeInTheDocument();
  });

  it("should increment count on click", async () => {
    render(<Defulat />);
    userEvent.click(screen.getByRole("button"));
    expect(await screen.findByText(/count is 1/i)).toBeInTheDocument();
  });
});
