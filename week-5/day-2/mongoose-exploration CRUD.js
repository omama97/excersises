const mongoose = require("mongoose"); //allow comunication with mongoDB
mongoose.connect("mongodb://localhost/humans", { useNewUrlParser: true }); // &of DB

//CRUD

//Schema

const Schema = mongoose.Schema; //blueprint
const personSchema = new Schema({
  firstName: String,
  lastName: String,
  age: Number,
});

const Person = mongoose.model("person", personSchema, "persons"); //<== persons will be the name of the collection
// Person.find({}, function (err, result) {
//   console.log(result);
// });

//create
let p2 = new Person({ firstName: "Shoo", lastName: "Bert", age: 50 });
let p3 = new Person({ firstName: "Shoob", lastName: "Ert", age: 34 });
let p4 = new Person({ firstName: "Sh", lastName: "Oobert", age: 10 });
let p5 = new Person({ firstName: "Shoober", lastName: "T", age: 44 });

let allTheShooberts = [p2, p3, p4, p5];
allTheShooberts.forEach((s) => s.save());

// Retrieve

// Person.find({}, function (err, result) {
//   console.log(result); //array of people
// });

// // Retrieve
// Person.find({ _id: "62e80f647970f8ab30d21440" }, function (err, people) {
//   console.log(people);
// }); // retraive array

// //Update
// Person.findById("5c16c63bc5ad73471c3ca323", function (err, person) {
//   person.age += 10; //how time flies
//   person.save();
// });
// }); // retraive single object

// Person.find({}, function (err, people) {
//   console.log(people);
// });

//Delete
Person.findById("5c16c63bc5ad73471c3ca323", function (err, person) {
  person.remove(function (err) {
    console.log(err); //usually this will be `null`, unless something went wrong
  });
});
