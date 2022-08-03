const mongoose = require("mongoose"); //allow comunication with mongoDB
mongoose.connect("mongodb://localhost/BooksDB", { useNewUrlParser: true }); // &of DB

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: String,
  author: String,
  reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }], //reference to an array of Review documents
});

const reviewSchema = new Schema({
  book: { type: Schema.Types.ObjectId, ref: "Book" }, //reference to a Book document
  reviewText: String,
  critic: { type: Schema.Types.ObjectId, ref: "Critic" }, //reference to a Critic document
});

const criticSchema = new Schema({
  name: String,
  reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }], //reference to an array of Review documents
});

const Book = mongoose.model("Book", bookSchema);
const Review = mongoose.model("Review", reviewSchema);
const Critic = mongoose.model("Critic", criticSchema);

let b1 = new Book({
  title: "1Name of the Wind",
  author: "Patrick Rothfuss",
  reviews: [],
});

let b2 = new Book({
  title: "2Name of the Wind",
  author: "Patrick Rothfuss",
  reviews: [],
});

let c1 = new Critic({
  name: "William Jeffery",
  reviews: [],
});

let r1 = new Review({
  book: b1,
  critic: c1,
  reviewText: "Excellent Book",
});

b1.reviews.push(r1);
c1.reviews.push(r1);

b1.save();
b2.save();
c1.save();
r1.save();

// Book.find({}, function (err, books) {
//   console.log("books");
//   console.log(books);
// });

// Review.find({}, function (err, reviews) {
//   console.log("reviews");
//   console.log(reviews);
// });

Book.findOne({})
  .populate("reviews")
  .exec(function (err, book) {
    console.log(book.reviews);
  });

// Book.findOne({})
//   .populate({
//     path: "reviews",
//     populate: {
//       path: "critic",
//     },
//   })
//   .exec(function (err, book) {
//     console.log(book.reviews);
//   });

// Review.find({}, function (err, reviews) {
//   console.log(reviews);
// });

// Review.find({})
//   .populate("book critic")
//   .exec(function (err, reviews) {
//     console.log(reviews);
//   });

// Book.findOne({})
//   .populate({
//     path: "reviews",
//     populate: {
//       path: "critic",
//     },
//   })
//   .exec(function (err, book) {
//     console.log(book.reviews);
//   });

// Review.find({}, function (err, reviews) {
//   console.log(reviews);
// });

// Critic.findOne({}, function (err, critic) {
//   //now we have a single critic
//   critic.populate("reviews", function () {
//     console.log(critic.reviews);
//   });
// });
