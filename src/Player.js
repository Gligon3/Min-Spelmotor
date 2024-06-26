import Projectile from './Projectile.js'
import spriteImage from './assets/Idle Run (78x58).png'

export default class Player {
  constructor(game) {
    this.game = game
    this.width = 32
    this.height = 64
    this.x = 50
    this.y = 330
    this.fps = 30

    this.frameX = 0

    this.projectiles = []
    
    this.speedX = 0
    this.speedY = 0
    this.maxSpeed = 10    
    this.jumpSpeed = 40 
    this.ground = false
    
    
    const image = new Image()
    image.src = spriteImage
    this.image = image

    console.log()
  }

  update(deltaTime) {
    if (this.game.keys.includes('ArrowLeft')) {
      this.speedX = -this.maxSpeed
    } else if (this.game.keys.includes('ArrowRight')) {
      this.speedX = this.maxSpeed
    } else if (this.game.keys.includes('ArrowUp')) {
      this.speedY = this.jumpSpeed
      console.log(this.speedY)
    } else if (this.game.keys.includes('ArrowDown')) {
      this.speedY = -this.jumpSpeed  
    } else {
      this.speedX = 0
    }

    if (this.game.keys.includes('ArrowUp') && this.grounded) {
    this.speedY = -this.jumpSpeed
    this.grounded = false
    } else {
      this.speedY = 0
    }

    if (this.grounded) {
      this.speedY = 0
    } else {
      this.speedY += this.game.gravity
    }
    this.y += this.speedY

    this.y += this.speedY
    this.x += this.speedX

    // projectiles
    this.projectiles.forEach((projectile) => {
      projectile.update()
    })
    this.projectiles = this.projectiles.filter(
      (projectile) => !projectile.markedForDeletion
    )
  }

  draw(context) {
    context.fillStyle = '#f00'
    context.fillRect(this.x, this.y, this.width, this.height)

    this.projectiles.forEach((projectile) => {
      projectile.draw(context)
    })

    if (this.game.debug) {
      context.strokeRect(this.x, this.y, this.width, this.height)
      context.fillStyle = 'black'
      context.font = '12px Arial'
      context.fillText(this.frameX, this.x, this.y - 5)
    }
    if (this.grounded) {
      this.speedY = 0
    } else {
      this.speedY += this.game.gravity
    }
    
    this.y += this.speedY
  }

  shoot() {
    this.projectiles.push(
      new Projectile(this.game, this.x + this.width, this.y + this.height / 2)
    )
  }
}

