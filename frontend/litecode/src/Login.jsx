import { useState } from "react";
import "./App.css";

function Login(props) {
  const [errorMessage, setErrorMessage] = useState({});
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      email: form.email,
      password: form.password,
    };
    // console.log("email " + form.email);
    // console.log("Password " + form.password);

    props.onLogin(user);
  };

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="email"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={handleChange}
        />
        <button type="submit" className="button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
