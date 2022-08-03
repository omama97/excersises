// localStorage.setItem("", "");
// localStorage.getItem("");
// localStorage.removeItem("key ")
// localStorage.clear()

let userStorage = {
  darkMode: true,
  showSideNav: false,
  defaultResultCount: 9,
  latestMarks: {
    sectionA: 92,
    sectionB: 11,
  },
  cart: [
    { id: 3112, count: 2 },
    { id: 812, count: 16 },
  ],
};

//JS - Setting (all of these are valid)
localStorage.userStorage = JSON.stringify(userStorage);
// localStorage.setItem("userStorage", JSON.stringify(userStorage));
// localStorage["userStorage"] = JSON.stringify(userStorage);

//In the browser:
// let data = JSON.parse(localStorage.userStorage);
// data.cart[data.cart.length - 1].count;

//In the browser
//let data = JSON.parse(localStorage.dataThatIsImportant || "[]")
//data.forEach(d => /*something with data*/)
