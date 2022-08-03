// //Reverse Only Numbers
// function reverseNumber(array) {
//   let arr = [1, w, e, 2, r, 7, 8];
//   arr.reverse();
//   return arr;
// }
// let aaa = [1, w, e, 2, r, 7, 8];

/////////////////////////////////

function reverse(array) {
  let indexes = [];
  let i = 0;
  array.forEach((element) => {
    if (typeof element == "number") indexes.push(i);
    i++;
  });
  for (let j = 0; j < indexes.length / 2; j++) {
    temp = array[indexes[j]];
    array[indexes[j]] = array[indexes[indexes.length - j - 1]];
    array[indexes[indexes.length - j - 1]] = temp;
  }
}
let x = [1, "w", "e", 2, "r", 7, 8];
reverse(x);
console.log(x);
