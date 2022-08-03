let express = require("express");
const app = express();
const path = require("path");
const data = {
  8112: {
    title: "Name of the Wind",
    author: "Patrick Rothfuss",
  },
  9121: {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
  },
  1081: {
    title: "The Giver",
    author: "Lois Lowry",
  },
};

//serving files
app.use(express.static(path.join(__dirname, "dist")));
app.use(express.static(path.join(__dirname, "node_modules")));

console.log(__dirname);
// serving data
app.get("/books/:bookId", function (req, res) {
  const id = req.params.bookId;
  const bookData = data[id];
  console.log(bookData);
  res.send(bookData);
});

const port = 3000;
app.listen(port, function () {
  console.log(`Node server created at port ${port}`);
});

//serve files
//get request for info html, css, js
