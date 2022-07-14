const list = document.getElementById("myList");
const addItem = function () {
  const newItem = document.createElement("li");
  newItem.innerHTML = "A new item!";
  list.appendChild(newItem);
};
