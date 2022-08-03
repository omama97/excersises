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

const Person =mongo mongoose.model("person", personSchema);

// Person.find({}, function (err, result) {
//   console.log(result);
// });
const P1 = new Person({ firstName: "omama", lastName: "yousef", age: 24 });
console.log(P1);
P1.save();
