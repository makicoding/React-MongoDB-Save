const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactmongodbtravelplanner"
);

const bookSeed = [
  {
    title: "Title 1",
    author: "Author 1",
    synopsis:
      "Synopsis 1",
    date: new Date(Date.now())
  },
  {
    title: "Title 2",
    author: "Author 2",
    synopsis:
      "Synopsis 2",
    date: new Date(Date.now())
  },
  {
    title: "Title 3",
    author: "Author 3",
    synopsis:
      "Synopsis 3",
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
