import { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import Problem from "./Problem";

function Problems() {
  const [problems, setProblems] = useState([
    {
      id: 1,
      name: "Hello",
      rate: 66,
      difficulty: "Hard",
    },
    {
      id: 2,
      name: "Hello2",
      rate: 66,
      difficulty: "Easy",
    },
    {
      id: 3,
      name: "Hello3",
      rate: 66,
      difficulty: "Hard",
    },
  ]);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Acceptance</th>
            <th>Difficulty</th>
          </tr>
        </thead>
        <tbody>
          {problems.map((problem) => (
            <ProblemStatements
              key={problem.id}
              id={problem.id}
              name={problem.name}
              rate={problem.rate}
              difficulty={problem.difficulty}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}

function ProblemStatements(props) {
  const name = props.name;
  const rate = props.rate;
  const difficulty = props.difficulty;

  return (
    <tr>
      <td>
        <Link to={`/problem/${props.id}`} state={{ state: props }}>
          {name}{" "}
        </Link>
      </td>
      <td>{rate}</td>
      <td>{difficulty}</td>
    </tr>
  );
}

export default Problems;
