// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown.js")



// TODO: Create an array of questions for user input
const questions = [ 
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },{
        type: "list",
        name: "license",
        message: "What license do you want to choose?",
        choices: ["MIT", "Apache", "Mozilla", "BSD"]
    },{
        type: "input",
        name: "username",
        message: "What is your Github username?"
    },{
        type: "input",
        name: "email",
        message: "What is your email address?"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const fs = require('fs');

    fs.writeFile(fileName, data, function(err){
        if (err) {
            console.log(err)
        }
        
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(answers) {
        console.log(answers)
    })
}

// Function call to initialize app
init();
