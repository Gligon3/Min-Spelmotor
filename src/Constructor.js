export default class Projectile {
    constructor(game, x, y) {
        this.game = game
        this.width = 4
        this.height = 4
        this. x = x
        this.y = y

        this.speed = 5
        this.damage = 1
        this.markedForDeletion = false
        this.ammo = 10
        this.frameX = 0
        this.frameY = 1
        this.maxFrame = 8
        this.fps = 20
        this.timer = 0
        this.interval = 1000 / this.fps

        this.flip = false
    }

    update(){
        this.x += this.speed
        if (this.x > this.game.width){
            this.markedForDeletion = true
        }
    }
    draw(context) {
        context.fillStyle = '#ff0'
        context.fillRect(this.x, this.y, this.width, this.height)
        if (this.flip) {
            context.save()
            context.scale(-1, 1)
        }
        
        context.drawImage(
            this.image,
            this.frameX * this.width,
            this.frameY * this.height -14,
            this.width,
            this.height,
            this.flip ? this.x * -1 - this.width : this.x,
            this.y,
            this.width,
            this.height,
        )

        context.restore()
    }

    shoot() {
        if (this.ammo > 0) {
            this.Projectile.push(
                new Projectile(this.game, this.x + this.width, this.y + this.height / 2)
            )
            this.ammo--
        }
    }
}