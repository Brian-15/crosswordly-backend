const logger = require("morgan");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const indexRouter = require("./routes/index");
const boardsRouter = require("./routes/boards");
const wordsRouter = require("./routes/words");
const usersRouter = require("./routes/users");
const dictionariesRouter = require("./routes/dictionaries");
const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/words", wordsRouter);
app.use("/boards", boardsRouter);
app.use("/dictionaries", dictionariesRouter);

module.exports = app;