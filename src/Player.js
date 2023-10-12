
import InputHandler from "./InputHanler";
import Projectile from "./Constructor";
export default class Player {
    constructor(game) {
        this.game = game;
        this.width = 32
        this.height = 64;
        this.x = 50
        this.y = 100;

        this.speedX = 1;
        this.speedY = 0;
        this.maxSpeed = 10;
        this.projectiles = []
    }

    update(deltaTime) {
        if (this.game.keys.includes('ArrowUp')) {
            this.speedY = -this.maxSpeed;
        } else if (this.game.keys.includes('ArrowDown')) {
            this.speedY = this.maxSpeed;
        } else {
            this.speedY = 0;
        }
        if (this.game.keys.includes('ArrowLeft')) {
            this.speedX = -this.maxSpeed;
        } else if (this.game.keys.includes('ArrowRight')) {
            this.speedX = this.maxSpeed;

        }
        this.y += this.speedY;
        this.x += this.speedX;

        console.log(this.y)

        if (this.shootTimer > 0) {
            this.shootTimer -= deltaTime
        }
        this.projectiles.forEach((projectile) => {
            projectile.update()
        })
        this.projectiles = this.projectiles.filter(
            (projectile) => !projectile.markedForDeletion
        )
    }


    draw(context) {
        context.fillstyle = 'f#00'
        context.fillRect(this.x, this.y, this.width, this.height)
        this.projectiles.forEach((projectile) => {
            projectile.draw(context)
        })
    }
    shoot() {
        this.projectiles.push(
            new Projectile(this.game, this.x + this.width, this.y + this.height / 2)
        )
    }
}