const inquirer = require("inquirer");
const {writeFile}= require('fs/promises')
const Circle = require('./lib/circle.js')
const Square = require('./lib/square.js')
const Triangle = require('./lib/triangle.js');
const { error } = require("console");

const validateInput = (input) => {
  if(input.length > 3) {
    return "Please enter text that has 3 characters or less!";
  } 
  return true
}
const validateColor = function(color) {
    const colorRegex = /^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$|^([a-zA-Z]+)$/; // matches either a valid hex color or color keyword
    if(colorRegex.test(color)) {
      return true;
    } else {
      return "Please enter a valid color value";
    }
  }
inquirer.prompt([
  {
    type: "input",
    message: "What would you like your SVG to say?(Max of three letters)",
    name: "name",
    validate: validateInput,
  },
  {
    type: "input",
    message:
      "What text color would you like?(Enter a color keyword OR a hexadecimal color)",
    name: "textColor",
    validate: validateColor,
  },
  {
    type: "list",
    message: "What shape would you like like your SVG to be?",
    choices: ["circle", "triangle", "square"],
    name: "shape",
  },
  {
    type: "input",
    message:
      "What color would you like your shape to have? (Enter a color keyword OR a hexadecimal color)",
    name: "fillColor",
    validate: validateColor,

  },
])
    .then(data=>{
        const {name, textColor, shape, fillColor} = data
        let svg;
        switch (shape) {
            case 'square':
                svg= new Square(name, textColor, fillColor).render()
                break;
            case 'triangle':
                svg = new Triangle(name, textColor , fillColor).render()
                break;
            case 'circle':
                svg = new Circle(name, textColor , fillColor).render()
                    break;
            default:
                throw new Error('This is the default settings')
                break;
        }
        writeFile('./examples/logo.svg', svg)
        .then(()=>console.log('logo.svg was created'))
        .catch(err=>console.error(err))
    })
