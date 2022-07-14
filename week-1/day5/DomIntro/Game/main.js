const playingField = document.getElementById("playing-field");
const down = document.getElementById("down");
const ball = document.getElementById("block");
ball.style.backgroundColor = "yellow";

const header = document.createElement("h1");
header.innerHTML = "The Best Game Ever";
header.style.color = "#c0392b";
header.style.fontFamily = "Helvetica";
document.body.appendChild(header);

const subHeader = document.createElement("h2");
subHeader.innerHTML = "Game by: Danny Brudner";
subHeader.setAttribute("class", "sub-header");
document.body.appendChild(subHeader);

const moveUp = function () {
  const initialVal = parseInt(ball.style.top) || 0;
  ball.style.top = initialVal - 15 + "px";
};

const moveLeft = function () {
  const initialVal = parseInt(ball.style.left) || 0;
  ball.style.left = initialVal - 15 + "px";
};

const moveRight = function () {
  const initialVal = parseInt(ball.style.left) || 0;
  ball.style.left = initialVal + 15 + "px";
};

const moveDown = function () {
  const initialVal = parseInt(ball.style.top) || 0;
  ball.style.top = initialVal + 15 + "px";
};
