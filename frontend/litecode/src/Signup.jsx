import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      name: form.name,
      email: form.email,
      password: form.password,
    };

    navigate("/login", { state: { user: user } });
  };

  return (
    <>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="name"
          onChange={handleChange}
        ></input>
        <input
          type="email"
          name="email"
          placeholder="email"
          onChange={handleChange}
        ></input>
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={handleChange}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default SignUp;
