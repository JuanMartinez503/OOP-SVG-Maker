const inquirer = require("inquirer");
const { writeFile } = require("fs/promises");
const Circle = require("./lib/circle.js");
const Square = require("./lib/square.js");
const Triangle = require("./lib/triangle.js");
const { error } = require("console");

const validateInput = (input) => {
  //will validate to make sure that the input in less than 3
  if (input.length > 3) {
    return "Please enter text that has 3 characters or less!";
  }
  return true;
};

inquirer
  .prompt([
    //will ask the user for input on the svg file to make
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
  .then((data) => {
    const { name, textColor, shape, fillColor } = data; //this will deconstruct the data
    let svg;
    switch (
      shape //a switch case state that will run a different function based on the shape that user chooses.
    ) {
      case "square":
        svg = new Square(name, textColor, fillColor).render();
        break;
      case "triangle":
        svg = new Triangle(name, textColor, fillColor).render();
        break;
      case "circle":
        svg = new Circle(name, textColor, fillColor).render();
        break;
      default:
        throw new Error("This is the default settings");
        break;
    }
    writeFile("./examples/logo.svg", svg) //writes a logo.svg fle and places it in the example folder
      .then(() => console.log("logo.svg was created"))
      .catch((err) => console.error(err));
  });
