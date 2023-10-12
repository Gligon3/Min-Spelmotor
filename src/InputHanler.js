export default class InputHandler {
    constructor(game) {
        this.game = game
        window.addEventListener('keydown', (event) => {
        
            if (
                (event.key === 'ArrowUp'||
                event.key === 'ArrowDown' ||
                event.key === 'ArrowLeft' ||
                event.key === 'ArrowRight') &&
                this.game.keys.indexOf(event.key) === -1
            ){      
            this.game.keys.push(event.key)
            }
            if(event.key === 'd') {
                this.game.debug = !this.game.debug
            }
            if (event.key === ' ' && this.shootTimer <= 0) {
                this.game.player.shoot()
                this.shootTimer = 0,5
            }
            if (event.key === ' ') {
                this.game.player.shoot()
            }
        })
        window.addEventListener('keyup', (event) => {
            if(this.game.keys.indexOf(event.key) > -1) {
                this.game.keys.splice(this.game.keys.indexOf(event.key), 1)
            }
        })
    }
}
        