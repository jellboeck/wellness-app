console.log('server');

const express = require("express");
const session = require("express-session");
// passport required as configured
var passport = require("./config/passport");
const path = require("path");
const PORT = process.env.PORT || 3001;

var db = require("./models");

// Define middleware here
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// use sessions to keep track of user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

//require api routing
require("./routes/api-routes.js")(app);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// app.listen(PORT, () => {
//   console.log(`🌎 ==> API server now on port ${PORT}!`);
// });

// sync database and log message to user upon success
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
});
