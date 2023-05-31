import { useLocation } from "react-router-dom";

export default function Problem() {
  const location = useLocation();
  const state = location.state;

  // Access the state properties
  const { name, rate, difficulty } = state.state;

  return (
    <div>
      <h1>Problem Details</h1>
      <p>Name: {name}</p>
      <p>Rate: {rate}</p>
      <p>Difficulty: {difficulty}</p>
    </div>
  );
}
