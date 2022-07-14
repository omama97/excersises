// toUpperCase();
//text.slice(3) 0 1 2XXX
// charAt(0);
// toLowerCase();

const capitalize = (name) =>
  name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

console.log(capitalize("bOb")); // returns Bob
console.log(capitalize("TAYLOR")); // returns Taylor
console.log(capitalize("feliSHIA")); // returns Felishia
