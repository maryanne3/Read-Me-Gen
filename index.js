// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const license = ["None", "MIT", "Apache", "BSD 2-clause license", "BSD 3-clause license"];


// TODO: Create an array of questions for user input
const userQuestions = [
    
        {
          type: "input",
          name: "title",
          message: "What is the title of the project?",
        },
        {
          type: "input",
          name: "description",
          message: "What is the description?",
        },
        {
          type: "input",
          name: "usage",
          message: "How do I use the application?",
        },
        {
          type: "input",
          name: "test",
          message: "How do I test the application?",
        },
        {
          type: "input",
          name: "github",
          message: "What is your github username?",
        },
        {
          type: "input",
          name: "email",
          message: "What is your email?",
        },
        {
          type: "input",
          name: "contribution",
          message: "How can people contribute to this app?",
        },
        {
          type: "list",
          name: "license",
          message: "Choose a license type:",
          choices: license
        },
        {
          type: "input",
          name: "installation",
          message: "What is your installation process?",
        },
      ];



// TODO: Create a function to write README file
function writeToFile(filename, data) {
  const filename = ".utils/generate.md";

  fs.writeFile(filename, data, function (err) {
      err ? console.log(err) : console.log(filename + " README.md has been created!")
  });
    
}

// TODO: Create a function to initialize app
 async function init() {
    let answers = await userQuestions();
    writeToFile((answers.fileName),(generateMarkdown(answers)));

}

// Function call to initialize app

init();
