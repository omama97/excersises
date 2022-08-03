console.log("One");
setTimeout(() => {
  console.log("Three");
}, 40);

setTimeout(() => {
  console.log("Four");
}, 0);
console.log("Tow");
//webAPI =>callback queue=>event loop check