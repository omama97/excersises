

function Count_Vowels(str) {
    const VOWELS=["a","e","i","o","u"]
    let count=0;
    let ArrayOfStr =str.split("");
    ArrayOfStr.forEach(element => { if (VOWELS.includes(element)){count++}});
    return ArrayOfStr;
}

function Median_Char(str) {
   let ArrayOfChar =str.split("");
   let SortedArray=ArrayOfChar.sort();
   let middle=SortedArray[SortedArray.length/2]
   return middle;

}

function Second_Biggest() {
    
}

function Followed_Numbers() {
    
}

function Duplicate_Array() {
    
}

function Reverse_Only_Numbers() {
    
}



function DeepClone() {
    
}

function findCommonNumber(){

}




function Count_Vowels(str) {
  console.log("Count_Vowels");
  const vowels = ["a", "a", "i", "o", "a"];
  let count = 0;
  for (const letter of str) {
    if (vowels.includes(letter)) {
      count++;
    }
  }
  return count;
}

console.log(Count_Vowels("Count_Vowels"));

//Median Char  “question” => “o”
function Median_Char(str) {
  let arr = str.split("");
  let middle = Math.floor(arr.length / 2);

  console.log(arr[middle]);
}

Median_Char("str");
//Second Biggest []

const array1 = [4, 1, 3];
array1.sort(function (a, b) {
  return b - a;
}); //nlogn
console.log(array1[1]);
console.log(array1);

//Followed Numbers
console.log("Followed Numbers");
for (const i in array1) {
  console.log(array1[i]);

  if (array1[i] == array1[i + 1] - 1) {
    console.log(array1[i], array1[i + 1]);
  }
}

//Duplicate an Array
///----------------------
d[]
for i=0, i<x.length;i++
d[i]=x[i]i

d[i+x.length]=x[i]

return d

//--------------------------------------------------------
const arr1 = [1, 2, 3];

arr1.push(...arr1);

console.log(arr1);

// duplicate 3 times

let arr=[]
for i<arr.length*2{
newarr.push (arr[i%arr.length])
}
return newarr
log duplicatearray(arr)

//Reverse Only Numbers
function reverseNumber(array) {
  let arr = [1, w, e, 2, r, 7, 8];
  arr.reverse();
  return arr;
}
let aaa = [1, w, e, 2, r, 7, 8];
reverseNumber();
//7. Reverse Only Numbers
