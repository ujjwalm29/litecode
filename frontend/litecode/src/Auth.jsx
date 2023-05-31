import { useState, useEffect } from "react";
import Login from "./Login";
import "./index.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Auth() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState("");

  const { state } = useLocation();

  useEffect(() => {
    if (state != null) {
      console.log(users);
      console.log("Setting " + state.user);
      setUsers((users) => [...users, state.user]);
      console.log("User signed up");
      console.log(state.user);
      console.log(users);
      state.user = null;
    }
  }, [state?.user]);

  useEffect(() => {
    console.log(users); // Log the updated users array
  }, [users]);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
  };

  const doLogin = (user) => {
    if (user.email == null || user.password == null) {
      console.log("Fields Null");
      return;
    }
    const existingUser = users.find(
      (u) => u != null && user.email === u.email && user.password == u.password
    );
    if (existingUser) {
      setUsername(existingUser.name);
      setIsLoggedIn(true);
      console.log("User signed in");
    } else {
      console.log("Incorrect login. Existing users " + users.length);
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <>
          <h2>Welcome {username}</h2>
          <Link to="{/problemset/all}">Problems</Link>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <h2>Login</h2>
          <Login onLogin={doLogin} />
          <h3>
            Don't have an account? <Link to={"/signup"}>SignUp</Link>
          </h3>
        </>
      )}
    </div>
  );
}

export default Auth;
