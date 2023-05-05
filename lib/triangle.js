const Shapes = require('./shapes.js')

class Triangle extends Shapes{
    constructor(name,textColor,fillColor){
        super(name, textColor, fillColor)
    }
    render(){
        ` <svg width="300" height="200">
        <polygon points="150,25 75,175 225,175" fill="${this.fillColor}" />
        <text x="150" y="125" fill="${this.textColor}" text-anchor="middle" font-size="50">${this.name}</text>
      </svg>`
    }
}
module.exports = Triangle