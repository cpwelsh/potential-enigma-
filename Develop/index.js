// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown.js")



// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    }, {
        type: "input",
        name: "description",
        message: "Describe your README"
    }, {
        type: "input",
        name: "installationInstructions",
        message: "What are the installation instructions?"
    }, {
        type: "input",
        name: "usageInformation",
        message: "What is the usage information?"
    }, {
        type: "input",
        name: "contributionGuidelines",
        message: "What are the contribution guidelines?"
    }, {
        type: "input",
        name: "testInstructions",
        message: "What are the test instructions?"
    }, {
        type: "list",
        name: "license",
        message: "What license do you want to choose?",
        choices: ["MIT", "Apache", "Mozilla", "BSD"]
    }, {
        type: "input",
        name: "username",
        message: "What is your Github username?"
    }, {
        type: "input",
        name: "email",
        message: "What is your email address?"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const fs = require('fs');

    fs.writeFile(fileName, data, function (err) {
        if (err) {
            console.log(err)
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function (answers) {

            console.log(answers)

            writeToFile('README.md',generateMarkdown(answers))
        })
}

// Function call to initialize app
init();
