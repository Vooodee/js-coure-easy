const board = document.querySelector("#board");
const colors = [
  "rgb(237 107 91)",
  "rgb(58 62 89)",
  "rgb(125, 80, 185, 1)",
  "rgb(79, 163, 165, 1)",
  "rgb(254, 111, 155, 1)",
  "rgb(255, 187, 90, 1)",
  "rgb(99 197 234)",
  "rgb(242 202 203)",
  "rgb(236 230 206)",
  "rgb(249 172 102)",
];

const window_width = document.documentElement.clientWidth
const window_height = document.documentElement.clientHeight
const SQUARES_NUMBER = Math.floor((window_width * window_height) / (29 * 29));

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setColor(square));

  square.addEventListener("mouseleave", () => removeColor(square));
  board.append(square);
}

function setColor(element) {
  const color = getRandomColor()
  element.style.background = color
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}
function removeColor(element) {
  element.style.background = "rgb(58 62 89)"
  element.style.boxShadow = "0 0 2px #000"
}


function getRandomColor() {
   index = Math.floor(Math.random() * colors.length )
   return colors[index]
}
