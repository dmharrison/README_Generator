// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
const inquirer = require("inquirer");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Enter your project title",
  },
  {
    type: "input",
    name: "description",
    message: "Write a description of you project",
  },
  {
    type: "input",
    name: "installation",
    message: "What are the installation instructions",
  },
  {
    type: "input",
    name: "usage",
    message: "Provide instructions and examples for use",
  },
  {
    type: "list",
    name: "license",
    message: "What license did you use",
    choices: ["MIT", "Apache 2.0 License", "ISC"],
  },
  {
    type: "input",
    name: "contributing",
    message: "Who contributed to this project",
  },
  {
    type: "input",
    name: "tests",
    message: "Write tests for this project",
  },
  {
    type: "input",
    name: "gitHub",
    message: "Enter your gitHub link",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Success!")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((response) => {
      const markdown = generateMarkdown(response);
      writeToFile("ExampleREADME1.md", markdown);
    })
    .catch((err) => {
      console.error(err);
    });
}

// Function call to initialize app
init();
