import { render, screen } from "@testing-library/react";
import { HomePage } from "../../src/09-useContext/HomePage";
import { UserContext } from "../../src/09-useContext/context/UserContext";

describe("<HomePage /> tests", () => {
  const user = {
    id: 1,
    name: "Andres",
  };
  test("should show the component without the user", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <HomePage />
      </UserContext.Provider>
    );
    const preTag = screen.getByLabelText("pre");

    expect(preTag.innerHTML).toBe("null");
  });

  test("should show the component with the user", () => {
    render(
      <UserContext.Provider value={{ user }}>
        <HomePage />
      </UserContext.Provider>
    );
    const preTag = screen.getByLabelText("pre");

    expect(preTag.innerHTML).toBe(JSON.stringify(user));
  });
});
