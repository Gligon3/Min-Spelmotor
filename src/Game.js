import player from './Player.js'
import InputHandler from './InputHanler.js'
import UserInterface from './UserInterface.js'
export default class Game {
  constructor(width, height) {
    this.Input = new InputHandler(this)
    this.keys = []
    this.width = width
    this.height = height
    this.enemies = []
    this.gameOver = false
    this.gravity = 1
    this.debug = false
    this.player = new player(this)
    this.speedX = 1
    this.speedY = 0

  }

  update(deltaTime) {
    if (!this.gameOver) {
      this.gameTime += deltaTime
      this.player.update(deltaTime)

    }
  }

  draw(context) {
    context.fillStyle = 'f#00';
    context.fillRect(this.x, this.y, this.width, this.height)
    this.player.draw(context)
  }
}
