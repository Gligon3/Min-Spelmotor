export default class Projectile {
  constructor(game, x, y) {
    this.game = game
    this.width = 10
    this.height = 4
    this.x = x
    this.y = y

    this.speed = 5
    this.damage = 2
    this.markedForDeletion = false
  }

  update() {
    this.x += this.speed
    if (this.x > this.game.width) {
      this.markedForDeletion = true
    }
  }

  draw(context) {
    context.fillStyle = '#ff0'
    context.fillRect(this.x, this.y, this.width, this.height)
  }
}