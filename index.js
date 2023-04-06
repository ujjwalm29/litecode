const express = require("express");
const bodyParser = require("body-parser");
const { v4: uuidv4 } = require("uuid");

const app = express();
app.use(bodyParser.json());

const PORT = 3000;

const USERS = [
  {
    id: 1,
    email: "ujjwal@lol.com",
    password: "abc",
  },
];
const QUESTIONS = [
  {
    id: 1,
    title: "Two states",
    description: "Given an array , return the maximum of the array?",
    testCases: [
      {
        input: "[1,2,3,4,5]",
        output: "5",
      },
    ],
  },
];

const SUBMISSIONS = [
  {
    userId: 1,
    questionId: 1,
    code: "function max(arr) { return Math.max(...arr) }",
    createdAt: new Date(),
    status: "accepted",
  },
];

app.post("/signup", function (req, res) {
  const { email, password } = req.body;
  // Add logic to decode body
  // body should have email and password
  if (
    !req.body.hasOwnProperty("email") ||
    !req.body.hasOwnProperty("password")
  ) {
    res.status(400).send();
  }

  //Store email and password (as is for now) in the USERS array above
  //(only if the user with the given email doesnt exist)

  const emailExists = USERS.some((u) => u.email === email);

  if (!emailExists) {
    USERS.push({
      id: uuid,
      email: email,
      password: password,
    });
    res.status(200).send();
  } else {
    res.status(401).send();
  }
});

app.post("/login", function (req, res) {
  const { email, password } = req.body;

  // Add logic to decode body
  // body should have email and password
  if (
    !req.body.hasOwnProperty("email") ||
    !req.body.hasOwnProperty("password")
  ) {
    res.status(400).send();
  }

  // Check if the user with the given email exists in the USERS array
  // Also ensure that the password is the same
  const userFromArr = USERS.find((u) => u.email === email);

  // If the user doesnt exist, return back 401 status code to the client
  if (userFromArr == undefined) {
    console.log("User not found");
    return res.status(401).send();
  }

  // If the password is the same, return back 200 status code to the client
  // Also send back a token (any random string will do for now)
  // If the password is not the same, return back 401 status code to the client
  if (userFromArr.password == password) {
    res.status(200).json({
      token: uuidv4(),
    });
  } else {
    res.status(401).send();
  }
});

app.get("/questions", function (req, res) {
  //return the user all the questions in the QUESTIONS array
  res.status(200).json(QUESTIONS);
});

app.get("/submissions", function (req, res) {
  // return the users submissions for this problem
  // return the submissions for userid and questionid in req

  const { userId, questionId } = req.query;

  if (
    !req.query.hasOwnProperty("userId") ||
    !req.query.hasOwnProperty("questionId")
  ) {
    res.status(400).send();
  }

  const submissions = SUBMISSIONS.filter(
    (s) => s.userId == userId && s.questionId == questionId
  );

  res.status(200).json(submissions);
});

app.post("/submissions", function (req, res) {
  // let the user submit a problem, randomly accept or reject the solution
  // Store the submission in the SUBMISSION array above

  const { userId, questionId, code } = req.body;

  if (
    !req.body.hasOwnProperty("userId") ||
    !req.body.hasOwnProperty("questionId") ||
    !req.body.hasOwnProperty("code")
  ) {
    res.status(400).send();
  }

  const submission = {
    userId: userId,
    questionId: questionId,
    createdAt: new Date(),
    status: Math.random() > 0.5 ? "accepted" : "rejected",
    code: code,
  };

  SUBMISSIONS.push(submission);

  res.send(201).send();
});

// leaving as hard todos
// Create a route that lets an admin add a new problem
// ensure that only admins can do that.

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}`);
});
