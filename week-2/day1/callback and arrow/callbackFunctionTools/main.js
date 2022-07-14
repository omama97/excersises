// const doSomething = function () {
//   console.log("something");
// };

// setTimeout(doSomething, 5000); //will invoke doSomething in 3 seconds

const run = (name) => {
  console.log("Run, " + name + ", run!");
};
const yell = function (action) {
  let env = "Forest";
  action(env);
};
run(yell);
