let wisdom = [];

// {text: "the thing the user wrote"}
let i = 0;
$("#app").on("click", function () {
  let input = $("input").val();
  console.log("kkkk");
  i++;
  $("#info").append(`<div data-id=${} delete">${input}</div>`);

  wisdom.push({ text: input });
  wisdom.addclass;
  lengthwisdom = wisdom.length;
  if (lengthwisdom % 2 === 0) {
    localStorage.wisdom = JSON.stringify(wisdom);
    
   // let data = JSON.parse(localStorage.wisdom);
  }
  console.log(wisdom);
});

$("#ls-clear").on("click", function () {
  localStorage.removeItem("wisdom");
  $("#info").empty();
});

$("#info").on("click", ".delete", function () {
  $(this).remove();
  wisdom.splice()

});

//JS - Setting (all of these are valid)
// localStorage.userStorage = JSON.stringify(userStorage);
// localStorage.setItem("userStorage", JSON.stringify(userStorage));
// localStorage["userStorage"] = JSON.stringify(userStorage);

//In the browser:
// let data = JSON.parse(localStorage.userStorage);
// data.cart[data.cart.length - 1].count;
