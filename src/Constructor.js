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