const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reacttravelertest"
);

const bookSeed = [
  {
    title: "Place to visit 1",
    synopsis:
      "Additional notes 1",
    date: new Date(Date.now())
  },
  {
    title: "Place to visit 2",
    synopsis:
      "Additional notes 2",
    date: new Date(Date.now())
  },
  {
    title: "Place to visit 3",
    synopsis:
      "Additional notes 3",
    date: new Date(Date.now())
  }
];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
