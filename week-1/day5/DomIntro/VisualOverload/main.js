const getRandomColor = function () {
  const niceColors = [
    "#8e44ad",
    "#3498db",
    "#c0392b",
    "#f1c40f",
    "#d35400",
    "#2ecc71",
    "#1abc9c",
    "#2c3e50",
    "#7f8c8d",
  ];
  const randomPosition = Math.floor(Math.random() * niceColors.length);
  return niceColors[randomPosition];
};

for (let i = 1; i < 8; i++) {
  const newBox = document.createElement("div");
  newBox.setAttribute("class", "box");
  newBox.style.backgroundColor = getRandomColor();
  newBox.onmouseenter = function () {
    const randomColor = getRandomColor();
    newBox.style.backgroundColor = randomColor;
  };
  document.getElementById("container").appendChild(newBox);
}
