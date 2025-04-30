import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {
  const { user, setUser } = useContext(UserContext);

  const onSetUser = () => {
    setUser({
      id: 123,
      name: "andres",
      email: "andres@email.com",
    });
  };

  return (
    <>
      <h2>Login Page</h2>
      <hr />

      <pre aria-label="pre">{JSON.stringify(user, null, 2)}</pre>

      <button onClick={onSetUser} className="btn btn-primary">
        Set user
      </button>
      <button onClick={() => setUser(null)} className="btn btn-danger">
        Delete user
      </button>
    </>
  );
};
