const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/peopleDB", { useNewUrlParser: true });
const Schema = mongoose.Schema;

const personSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: String,
  age: Number,
});
const Person = mongoose.model("person", personSchema);
let p1 = new Person({ firstName: "David", lastName: "Smith", age: 25 }); //purposefully ignoring the `address` field
console.log(p1);
p1.save();
//Exercise 1
db.linkedon.count({ salary: { $gt: 25000 } });
//Exercise 2
db.linkedon
  .find({}, { firstName: 1, salary: 1, _id: 0 })
  .sort({ salary: -1 })
  .limit(3);
//Exercise 3
db.linkedon.count({
  $and: [{ salary: { $gte: 7000 } }, { "currentCompany.name": "Walmart" }],
});
