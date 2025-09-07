import express from "express";
import cors from "cors";
// const express = require("express");
// const { MongoClient, ServerApiVersion } = require("mongodb");
import { MongoClient, ObjectId, ServerApiVersion } from "mongodb";

const app = express();

const PORT = 8000;

app.use(express.json());
app.use(cors());

const uri =
  "mongodb+srv://vijayanandr2000_db_user:oz8aeJoyMvd3uftN@cluster0.s8apjrw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}

const users = [];

const checkEmailInDB = async (email) => {
  //   return users.find((user) => user.email === email);
  return await client
    .db("loginApp")
    .collection("users")
    .findOne({ email: email });
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

app.post("/user", [emailPasswordMiddleware], async (req, res) => {
  const { email, password } = req.body;

  const existingUser = await checkEmailInDB(email);

  console.log("existingUser", existingUser);

  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }

  const newUser = {
    email,
    password,
  };

  //   users.push(newUser);
  const newUserInfo = await client
    .db("loginApp")
    .collection("users")
    .insertOne(newUser);

  return res
    .status(201)
    .json({ message: "User created successfully", newUserInfo });
});

app.get("/users", async (req, res) => {
  const allUsers = await client
    .db("loginApp")
    .collection("users")
    .find()
    .toArray();

  return res
    .status(200)
    .json({ message: "User retrieved successfully", allUsers });
});

app.get("/user/:id", async (req, res) => {
  const { id } = req.params;

  const mongoId = new ObjectId(id);

  const user = await client.db("loginApp").collection("users").findOne({
    _id: mongoId,
  });

  return res.status(200).json({ message: "User retrieved successfully", user });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  run().catch(console.dir);
});
