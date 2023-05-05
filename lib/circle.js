const Shapes = require('./shapes.js')

class Circle extends Shapes{
    constructor(name,textColor,fillColor){
        super(name, textColor, fillColor)
    }
render(){
    return  `
    <svg width="300" height="200">
      <circle cx="150" cy="100" r="75" fill="${this.fillColor}" />
      <text x="150" y="100" fill="${this.textColor}" text-anchor="middle" font-size="50">${this.name}</text>
    </svg>
  `;
}
}
module.exports = Circle;