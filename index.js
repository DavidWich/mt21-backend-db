const accounts = require("./test-data/accounts.js");
const books = require("./test-data/books.js");
const courses = require("./test-data/courses.js");
const emails = require("./test-data/emails.js");
const news = require("./test-data/news.js");

const mongodb = require("mongodb");
const mongoUrl = "mongodb://localhost:27017";

const initialize = async () => {
  const client = await mongodb.MongoClient.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = client.db();

  db.dropDatabase();

  await db.collection("accounts").insertMany(accounts);
  await db.collection("books").insertMany(books);
  await db.collection("courses").insertMany(courses);
  await db.collection("mails").insertMany(emails);
  await db.collection("news").insertMany(news);

  client.close();

  console.log("Data initialized");
};

initialize();
