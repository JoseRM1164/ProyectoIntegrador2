//Imports
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

//Configuration file
require("dotenv").config();

//Mongoose set up
mongoose.connect(
  process.env.DBURL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Connection to mongo succeed");
  }
);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// Middlewar}, () => {e
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser("Secret"));
app.use(express.static(path.join(__dirname, "public")));
app.use(
  session({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: {
      //Cookie with one day of duration
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

//Passport setup
require("./config/passportConfig");
app.use(passport.initialize());
app.use(passport.session());

// Start of Routes
let indexRouter = require("./routes/index");
let loginRoute = require("./routes/Auth/login");
let registerRoute = require("./routes/Auth/register");
let createInventory = require("./routes/inventories/createInvetory");

app.use("/", indexRouter);
app.use("/login", loginRoute);
app.use("/register", registerRoute);
app.use("/createInven", createInventory);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
