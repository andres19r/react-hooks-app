import { Link } from "react-router";

export const Navbar = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="login">Login</Link>
    </>
  );
};
