import { fireEvent, render, screen } from "@testing-library/react";
import { LoginPage } from "../../src/09-useContext/LoginPage";
import { UserContext } from "../../src/09-useContext/context/UserContext";

describe("<LoginPage /> tests", () => {
  const setUserMock = jest.fn();
  test("should show the component without the user", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText("pre");
    expect(preTag.innerHTML).toBe("null");
  });

  test("should call setUser when click on button", () => {
    render(
      <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
        <LoginPage />
      </UserContext.Provider>
    );
    const setUserBtn = screen.getByText("Set user");
    fireEvent.click(setUserBtn);

    expect(setUserMock).toHaveBeenCalled();
    expect(setUserMock).toHaveBeenCalledWith({
      id: 123,
      name: "andres",
      email: "andres@email.com",
    });
  });

  test("should call setUser with null when click on delete btn", () => {
    render(
      <UserContext.Provider
        value={{ user: { id: 1, name: "Andres" }, setUser: setUserMock }}
      >
        <LoginPage />
      </UserContext.Provider>
    );
    const deleteUserBtn = screen.getByText("Delete user");
    fireEvent.click(deleteUserBtn);

    expect(setUserMock).toHaveBeenCalled();
    expect(setUserMock).toHaveBeenCalledWith(null);
  });
});
