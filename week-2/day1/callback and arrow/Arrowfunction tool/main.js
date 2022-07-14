const getHypotenuse = (a, b) => {
  const aSquared = a * a;
  const bSquared = b * b;
  const cSquared = aSquared + bSquared;
  return Math.sqrt(cSquared);
};

const hypoteneuese = getHypotenuse(3, 4);
console.log(hypoteneuese); //prints 5

const add = (x, y) => x + y;

const sum = add(1, 2);
console.log(sum); //prints 3

// const add = (x, y) => {
//   return x + y
// }

// const sum = add(1, 2)
// console.log(sum) //prints 3
