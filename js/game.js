'use strict'

function Game(canvas) {
  this.player = null;
  this.enemies = [];
  this.canvas = canvas;
  this.ctx = this.canvas.getContext("2d");

};

Game.prototype.startLoop = function () {

  const loop = () => { //arrow function when you use setinterval, setanimation o settimeout
    this.clearCanvas();
    this.updateCanvas();
    this.drawCanvas();

    window.requestAnimationFrame(loop);
  }

  window.requestAnimationFrame(loop);

}

Game.prototype.clearCanvas = function () {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

}

Game.prototype.updateCanvas = function () {

}

Game.prototype.drawCanvas = function () {

}