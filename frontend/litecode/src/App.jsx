import { useState } from "react";
import "./App.css";
import Auth from "./Auth";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import SignUp from "./Signup";
import ErrorPage from "./ErrorPage";
import Problems from "./Problems";
import Problem from "./Problem";

function App() {
  // setInterval(() => {
  //   setProblems((problems) => [
  //     ...problems,
  //     {
  //       name: "zxczxczx",
  //       rate: 63,
  //       difficulty: "Hard",
  //     },
  //   ]);
  // }, 5000);

  // return (
  //   // <div>
  //   //   <div>
  //   //     <button
  //   //       onClick={() => {
  //   //         setProblems((problems) => problems1);
  //   //       }}
  //   //     >
  //   //       1
  //   //     </button>
  //   //     <button
  //   //       onClick={() => {
  //   //         setProblems((problems) => problems2);
  //   //       }}
  //   //     >
  //   //       2
  //   //     </button>
  //   //   </div>
  //   //   <div>
  //   //     {problems.map((problem) => (
  //   //       <ProblemStatements
  //   //         name={problem.name}
  //   //         rate={problem.rate}
  //   //         difficulty={problem.difficulty}
  //   //       />
  //   //     ))}
  //   //   </div>
  //   <Auth />
  //   // </div>
  // );

  return (
    <>
      <Routes>
        <Route path="/login" element={<Auth />} />
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/problemset/all" element={<Problems />} />
        <Route path="/problem/:id" element={<Problem />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
