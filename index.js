import { Game, Player, Ball } from "./Game.js";

const containerElement = document.getElementById("gameContainer");
const ballElement = document.getElementById("ball");
const playerElement = document.getElementById("palletLeft");

// Game objects
const player1 = new Player(playerElement);
const ball = new Ball(ballElement);
const game = new Game(containerElement, player1, ball);

// Listens for button presses
let keys = [];
window.addEventListener("keydown", (ev) => {
  if (!keys.includes(ev.key)) {
    keys.push(ev.key);
  }

  if (ev.key === "ArrowUp") {
    game.setPlayer1Direction(-1);
  } else if (ev.key === "ArrowDown") {
    game.setPlayer1Direction(1);
  }
});
window.addEventListener("keyup", (ev) => {
  keys.pop();
  if ((ev.key === "ArrowUp" || ev.key === "ArrowDown") && keys.length === 0) {
    game.setPlayer1Direction(0);
  }
});

// Game functions
function drawPlayer() {
  game.setPlayer1Top(
    player1.getPlayerTop() + game.player1Direction * game.playerSpeed
  );
}

// Main loop
function mainLoop() {
  drawPlayer();
  // game.moveBall()
  window.requestAnimationFrame(mainLoop);
}

window.requestAnimationFrame(mainLoop);
