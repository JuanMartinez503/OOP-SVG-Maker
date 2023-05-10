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
