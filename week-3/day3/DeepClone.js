function deepClone(obj) {
  console.log(JSON.stringify(obj));
  let t = JSON.parse(JSON.stringify(obj));
  return t;
}

let x = { a: "b", a2: ["first", "second"] };
let y = { b: x, b3: ["firtsY", x] };
let z = deepClone(y);
console.log(z);
