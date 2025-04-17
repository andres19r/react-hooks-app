import { Message } from "./Message";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
  const { formState, onInputChange, onResetForm } = useForm({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = formState;

  return (
    <>
      <h1>Form with Custom Hook</h1>
      <hr />

      <input
        className="form-control"
        placeholder="Username"
        name="username"
        type="text"
        value={username}
        onChange={onInputChange}
      />
      <input
        className="form-control mt-2"
        placeholder="andres@email.com"
        name="email"
        type="text"
        value={email}
        onChange={onInputChange}
      />
      <input
        className="form-control mt-2"
        placeholder="Password"
        name="password"
        type="password"
        value={password}
        onChange={onInputChange}
      />

      <button onClick={onResetForm} className="btn btn-primary mt-2">
        Reset
      </button>
    </>
  );
};
