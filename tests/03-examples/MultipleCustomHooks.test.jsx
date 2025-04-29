import { render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";

describe("MultipleCustomHooks tests", () => {
  test("should show the default component", () => {
    render(<MultipleCustomHooks />);

    expect(screen.getByText("Loading..."));
    expect(screen.getByText("Pokemon Information"));

    const nextBtn = screen.getByRole("button", { name: "Next" });
    const previousBtn = screen.getByRole("button", { name: "Previous" });

    expect(nextBtn.disabled).toBeTruthy();
    expect(previousBtn.disabled).toBeTruthy();
  });
});
