const express = require("express");
const path = require("path");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  // app.use(function (req, res) {
  //   res.sendFile(path.join(__dirname, "../client/build/index.html"))
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});
  // })
}

// else{
// app.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/public/index.html"));
// });
// }

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");

app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
