import express from "express";
import cors from "cors";
// const express = require("express");

const app = express();

const PORT = 8000;

app.use(express.json());
app.use(cors());

const users = [];

const checkEmailInDB = (email) => {
  return users.find((user) => user.email === email);
};

const emailPasswordMiddleware = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  next();
};

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/user", [emailPasswordMiddleware], (req, res) => {
  const { email, password } = req.body;

  const existingUser = checkEmailInDB(email);

  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }

  const newUser = {
    email,
    password,
  };

  users.push(newUser);

  return res.status(201).json({ message: "User created successfully" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
