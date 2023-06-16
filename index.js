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
  speed: 5,
  playerTop:
    getComputedStyleInt(container, "height") / 2 -
    getComputedStyleInt(player, "height") / 2,
  playerDirection: 0,
  setPlayerTop(value) {
    if (value < 0) this.playerTop = 0;
    else if (
      value >
      getComputedStyleInt(container, "height") -
        getComputedStyleInt(player, "height")
    )
      this.playerTop =
        getComputedStyleInt(container, "height") -
        getComputedStyleInt(player, "height");
    else this.playerTop = value;
    player.style.top = this.playerTop + "px";
  },
};

// Listens for buttons
window.addEventListener("keydown", (ev) => {
  if (ev.key === "ArrowUp") {
    Game.playerDirection = -1;
  } else if (ev.key === "ArrowDown") {
    Game.playerDirection = 1;
  }
});
window.addEventListener("keyup", (ev) => {
  if (ev.key === "ArrowUp" || ev.key === "ArrowDown") {
    Game.playerDirection = 0;
  }
});

// Game functions
function drawPlayer() {
  Game.setPlayerTop(Game.playerTop + Game.playerDirection * Game.speed);
}

// Main loop
function mainLoop() {
  drawPlayer();
  window.requestAnimationFrame(mainLoop);
}

window.requestAnimationFrame(mainLoop);
