const fs = require("node:fs");
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 3000;

const User = require("./model/user");

app.use(express.urlencoded({ extended: true }));
app.use("/css", express.static("css"));

mongoose
  .connect("mongodb://127.0.0.1:27017/UserDataDB")
  .then(() => {
    console.log("Database Connected");
  })
  .catch((e) => {
    console.log(e);
    console.log("Database Can't Be Connected");
  });

app.get("/", (req, res) => {
  let a = fs.readFileSync("index.html");
  res.send(a.toString());
});

app.post("/", async (req, res) => {
  const userData = new User(req.body);
  await userData.save();
  let a = fs.readFileSync("submit.html");
  res.send(a.toString());
});

app.listen(port, () => {
  console.log("App Running on port: ", port);
});
