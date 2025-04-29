import { fireEvent, render, renderHook, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";

jest.mock("../../src/hooks/useFetch");
jest.mock("../../src/hooks/useCounter");

const mockValue = {
  data: {
    name: "bulbasaur",
    sprites: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      front_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
      back_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
      back_shin:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
    },
  },
  isLoading: false,
  hasError: null,
};

describe("MultipleCustomHooks tests", () => {
  const mockIncrement = jest.fn();
  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement,
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should show the default component", () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    });

    render(<MultipleCustomHooks />);

    expect(screen.getByText("Loading..."));
    expect(screen.getByText("Pokemon Information"));

    const nextBtn = screen.getByRole("button", { name: "Next" });
    const previousBtn = screen.getByRole("button", { name: "Previous" });

    expect(nextBtn.disabled).toBeTruthy();
    expect(previousBtn.disabled).toBeTruthy();
  });

  test("should show a pokemon", () => {
    useFetch.mockReturnValue(mockValue);
    render(<MultipleCustomHooks />);
    expect(screen.getByText("#1 - bulbasaur")).toBeTruthy();
    const nextBtn = screen.getByRole("button", { name: "Next" });
    const previousBtn = screen.getByRole("button", { name: "Previous" });

    expect(nextBtn.disabled).toBeFalsy();
    expect(previousBtn.disabled).toBeFalsy();
  });

  test("should call the increment function", () => {
    useFetch.mockReturnValue(mockValue);
    useCounter.mockReturnValue({
      counter: 1,
      increment: mockIncrement,
    });
    render(<MultipleCustomHooks />);
    const nextBtn = screen.getByRole("button", { name: "Next" });

    fireEvent.click(nextBtn);
    expect(mockIncrement).toHaveBeenCalled();
  });
});
