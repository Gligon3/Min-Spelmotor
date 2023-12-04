import Layer from './Layer'
import skyImage from './assets/bg.png'

export default class Background {
  constructor(game) {
    this.game = game
    const sky = new Image()
    sky.src = skyImage
    this.skyLayer = new Layer(this.game, sky, 1760, 500, 0,2)
    this.layers = [
      this.skyLayer    ]
  }
  update() {
    this.layers.forEach((layer) => layer.update())
  }
  draw(context) {
    this.layers.forEach(layer => layer.draw(context))
  }
 }
