// Packages used for the logo maker
const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Square, Triangle } = require('./lib/shapes');

class LogoMaker {
  constructor() {
    this.shapeElement = ''; // Remove textElement
  }

  render() {
    return `
      <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <g>${this.shapeElement}</g>
      </svg>
    `;
  }

  setShapeElement(shape) {
    this.shapeElement = shape.render();
  }
}

const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter up to 3 characters for your logo text:',
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Choose a text color (e.g., red, #00FF00):',
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Choose a shape color (e.g., blue, #FFA500):',
  },
  {
    type: 'list',
    name: 'shapeType',
    message: 'Select a shape for your logo:',
    choices: ['Circle', 'Square', 'Triangle'],
  },
];

function writeLogoToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.error('Error writing logo to file:', err);
    }
    console.log(`Your logo has been created and saved as "${fileName}"!`);
  });
}

async function createLogo() {
  console.log('Welcome to the Logo Maker');
  const answers = await inquirer.prompt(questions);

  const text = answers.text;
  const textColor = answers.textColor;
  const shapeColor = answers.shapeColor; // Get the shape color from user input
  const shapeType = answers.shapeType;

  let shape;

  switch (shapeType) {
    case 'Circle':
      shape = new Circle({ text, textColor, shapeColor }); // Pass shapeColor
      break;
    case 'Square':
      shape = new Square({ text, textColor, shapeColor }); // Pass shapeColor
      break;
    case 'Triangle':
      shape = new Triangle({ text, textColor, shapeColor }); // Pass shapeColor
      break;
    default:
      console.error('Invalid shape selection. Please choose Circle, Square, or Triangle.');
      return;
  }

  const logo = new LogoMaker();
  logo.setShapeElement(shape);

  const svgCode = logo.render();
  console.log('Logo Created:\n');
  console.log(svgCode);

  const fileName = 'logo.svg';
  writeLogoToFile(fileName, svgCode);
}


createLogo();
