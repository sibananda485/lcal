const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const Candidate = require("./Schema");
async function dbConnection() {
  try {
    await mongoose.connect(
      "mongodb+srv://sahusiba485:123@strapi.fhnxn5q.mongodb.net/strapi"
    );
    console.log("Db connected");
  } catch (error) {
    console.log("Error in db", error);
  }
}

dbConnection();
app.use(cors())
app.use(express.json());

app.post("/", async (req, res) => {
  try {
    const docs = await Candidate.create(req.body);
    return res.json(docs);
  } catch (err) {
    return res.status(404);
  }
});
app.get("/", async (req, res) => {
  try {
    const docs = await Candidate.find({});
    return res.json(docs);
  } catch (err) {
    return res.status(404);
  }
});

app.listen(8000, () => {
  console.log("Server started");
});
