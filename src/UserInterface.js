import Game from "./Game"

export default class UserInterface {
    constructor(Game) {
        this.game = game    
        this.fontSize = 25
        this.fontFamily = 'Arial'
        this.color = 'White'
    }

    draw(context) {
        context.save()
        context.fillStyle = this.color
        context.shadowOffsetX = 2
        context.shadowOffsetY = 2
        context.shadowColor = 'black'
        context.textAline = 'left'
        context.font `${this.fontSize}px ${this.fontFamily}`
        context.fillText(
            `Time: ${(this.game.gameTime * 0.001).toFixed(1)}`,
            20,
            100
        )
        if (this.game.gameOver) {
            context.textAlign = 'center'
            context.font = `50px ${this.fontFamily}`
            context.fillText(
              'Game over',
              this.game.width / 2,
              this.game.height / 2 - 20
            )
          }
          // Debug

          if (this.game.debug) {
            //...
          }
          context.restore()
          this.UserInterface.draw(context)
    }
}