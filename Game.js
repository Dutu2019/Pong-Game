// Helper function
export function getComputedStyleInt(element, property) {
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

export class Game {
  constructor(HTMLElement, player1, ball) {
    this.HTMLElement = HTMLElement;
    this.containerHeight = getComputedStyleInt(this.HTMLElement, "height");
    this.containerWidth = getComputedStyleInt(this.HTMLElement, "width");
    this.player1 = player1;
    this.playerSpeed = 5;
    this.player1Direction = 0;
    this.player1.setPlayerTop(
      this.containerHeight / 2 - this.player1.getPlayerHeight() / 2
    );
    this.ball = ball;
    this.ballSpeed = 1;
    this.ballAngle = 0;
    this.ball.setCoords(
      this.containerWidth / 2 - this.ball.getBallRadius(),
      this.containerHeight / 2 - this.ball.getBallRadius()
    );
  }

  setPlayer1Top(value) {
    if (value < 0) {
      this.player1.setPlayerTop(0);
    } else if (value > this.containerHeight - this.player1.getPlayerHeight()) {
      this.player1.setPlayerTop(
        this.containerHeight - this.player1.getPlayerHeight()
      );
    } else {
      this.player1.setPlayerTop(value);
    }
  }

  setPlayer1Direction(value) {
    this.player1Direction = value;
  }

  moveBall() {
    let x = this.ballSpeed * Math.cos((Math.PI * this.ballAngle) / 180);
    let y = this.ballSpeed * Math.sin((Math.PI * this.ballAngle) / 180);
    this.ball.setCoords(
      this.ball.getCoords().x + x,
      this.ball.getCoords().y - y
    );
  }
}

export class Player {
  constructor(HTMLElement) {
    this.HTMLElement = HTMLElement;
    this.playerHeight = getComputedStyleInt(HTMLElement, "height");
    this.playerWidth = getComputedStyleInt(HTMLElement, "width");
    this.playerTop;
  }

  setPlayerTop(value) {
    this.playerTop = value;
    this.HTMLElement.style.top = this.playerTop + "px";
  }

  getPlayerTop() {
    return this.playerTop;
  }

  getPlayerHeight() {
    return this.playerHeight;
  }
}

export class Ball {
  constructor(HTMLElement) {
    this.HTMLElement = HTMLElement;
    this.ballRadius = getComputedStyleInt(this.HTMLElement, "height") / 2;
    this.x;
    this.y;
  }

  getCoords() {
    return {x: this.x, y: this.y};
  }

  setCoords(x, y) {
    this.x = x;
    this.y = y;
    this.HTMLElement.style.left = x + "px";
    this.HTMLElement.style.top = y + "px";
  }

  getBallRadius() {
    return this.ballRadius;
  }
}
