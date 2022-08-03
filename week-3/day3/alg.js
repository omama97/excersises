//common element between two array
// let arr1 = [1, 2, 3, 4];
// let arr2 = [1, 4, 5, 6];

// arr1.forEach((element) => {
//   if (arr2.includes(element)) {
//     console.log(element);
//   }
// });

//common element between two array
function findCommonNumber(arr1, arr2, arr3) {
  let common = new Set();
  let apperances2 = new Set(arr2);
  let apperances3 = new Set(arr3);
  arr1.forEach((element) => {
    if (apperances2.has(element) && apperances3.has(element))
      common.add(element);
  });

  return common;
}

function SortArray(arr) {
  arr.sort(function (a, b) {
    return b - a;
  });
  return arr;
}

let arr1 = [1, 2, 3, 4];
let arr2 = [4, 5, 6, 7];
let arr3 = [4, 7, 8, 6];

console.log(arr1);
arr1 = SortArray(arr1);
arr2 = SortArray(arr2);
arr3 = SortArray(arr3);

let commmonSet = findCommonNumber(arr1, arr2, arr3);
console.log(commmonSet);
