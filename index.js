const date = new Date();
const container = document.getElementById("gameContainer");
const ball = document.getElementById("ball");
const player = document.getElementById("palletLeft");

// Helper function
function getComputedStyleInt(element, property) {
  return +getComputedStyle(element)
    .getPropertyValue(property)
    .split("")
    .map((el) => {
      if (+el || el === ".") {
        return el;
      } else return;
    })
    .join("");
}

// Game object
const Game = {
  speed: 1,
  playerY: getComputedStyleInt(container, "height") / 2,
  playerDirection: 0,
};

// Listens for buttons
window
  .addEventListener("keydown", (ev) => {
    if (ev.key === "ArrowUp") {
      Game.playerDirection = 1;
    } else if (ev.key === "ArrowDown") {
      Game.playerDirection = -1;
    }
  })
  .addEventListener("keyup", (ev) => {
    if (ev.key === "ArrowUp" || ev.key === "ArrowDown") {
      Game.playerDirection = 0;
    }
  });


// Main loop
function mainLoop() {
  window.requestAnimationFrame(mainLoop);
}

window.requestAnimationFrame(mainLoop);
