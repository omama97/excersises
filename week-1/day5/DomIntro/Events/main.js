const box = document.getElementById("box");

const enterColor = function () {
  box.style.backgroundColor = "#c0392b";
  box.innerHTML = "AHH GO AWAY";
};

const leaveColor = function () {
  box.style.backgroundColor = "#1abc9c";
  box.innerHTML = "Hover over me!";
};
