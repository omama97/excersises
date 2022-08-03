console.log("server_express");

let express = require("express");
const app = express();
const users = {
  tilda: "You've done a wonderful job",
  riva: "You need to improve your form, but good perseverance",
  jeremy: "You're incredible",
};

app.get("/users/:userID", function (request, response) {
  response.send(users[request.params.userID]);
});

//========================object=============================

let query = {
  zipcode: "6863155",
  city: "Ankh Morpork",
  middleName: "Wilfred",
};

app.get("/details", (request, response) => {
  let params = request.query;
  console.log(params.city);

  response.send(params);
});

// npm install express

// listenning
// route ==== root base rout
app.get("/omama", function (req, res) {
  console.log("hello omama");
  res.send(" hi, welcome omama, you get it");
});
app.get("/life", function (req, res) {
  console.log("42");
  res.send(" 42");
});
app.get("/", function (request, response) {
  console.log("Someone has come into the server. Brace yourselves.");
  response.send("Ending the cycle, thanks for visiting");
});

app.get("/maps", function (request, response) {
  response.send("Here's some stuff related to maps");
});

app.get("/shoobi", function (request, response) {
  response.send("This here is the shoobi *route*");
});
const port = 3000;
app.listen(port, function () {
  console.log("server is running" + port);
});

app.get("/landing/:username", function (request, response) {
  response.send(`Hi there, ${request.params.username}`);
});

/////////////////////////////
const urllib = require("urllib");

urllib.request(
  "http://data.nba.net/10s/prod/v1/2016/players.json",
  function (err, response) {
    console.log(response.toString());
  }
);
