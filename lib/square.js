const Shapes = require('./shapes.js')

class Square extends Shapes{
    constructor(name,textColor,fillColor){
        super(name, textColor, fillColor)
    }
    render(){
        return `  <svg width="300" height="200">
        <rect x="50" y="50" width="200" height="100" fill="${this.fillColor}" />
        <text x="150" y="100" fill="${this.textColor}" text-anchor="middle" font-size="50">${this.name}</text>
      </svg>`
    }
}
module.exports = Square;