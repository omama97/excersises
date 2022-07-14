// let users = [];

// const getData = function () {
//   users = [{ name: "Rick" }, { name: "Morty" }];
//   console.log("Got users");
// };

// const displayData = function () {
//   console.log("Going to display users");
//   for (user of users) {
//     console.log(user.name);
//   }
// };

// getData();
// displayData();

// const getData = function () {
//   setTimeout(function () {
//     users = [{ name: "Rick" }, { name: "Morty" }];
//     console.log("Got users");
//   }, 3000);
// };

// getData();
let users = [];

const getData = function (callback) {
  setTimeout(function () {
    users = [{ name: "Rick" }, { name: "Morty" }];
    console.log("Got users");
    callback();
  }, 3000);
};

const displayData = function () {
  console.log("Going to display users");
  for (user of users) {
    console.log(user.name);
  }
};

getData(displayData);
