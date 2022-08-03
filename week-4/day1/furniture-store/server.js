let express = require("express");
const app = express();
const path = require("path");

const store = [
  { name: "table", inventory: 3, price: 800 },
  { name: "chair", inventory: 16, price: 120 },
  { name: "couch", inventory: 1, price: 1200 },
  { name: "picture frame", inventory: 31, price: 70 },
];

let priceObj = { price: null };
//serving files
app.use(express.static(path.join(__dirname, "dist")));
app.use(express.static(path.join(__dirname, "node_modules")));

// serving data
app.get("/priceCheck/:name", function (request, response) {
  let name = request.params.name;
  let priceObj = { price: null };
  for (let obj of store) {
    if (obj.name === nsame) {
      priceObj = { price: obj.price };
    }
  }

  response.send(priceObj);
});

const port = 3000;
app.listen(port, function () {
  console.log(`Node server created at port ${port}`);
});
