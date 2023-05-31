import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h2> Welcome to the random App </h2>
      <Link to="/login">
        <h3>Sign Up/Login</h3>
      </Link>
    </>
  );
}
