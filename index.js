// initializing all requires
const fs = require("fs");
const inquirer = require("inquirer");

inquirer
    .prompt([
        {
            type: "input",
            message: "What's your project's title?",
            name: "title"
        },
        {
            type: "input",
            message: "Describe your project.",
            name: "description"
        },
        {
            type: "input",
            message: "Instructions on how to install.",
            name: "installation"
        },
        {
            type: "input",
            message: "What are the uses of your project?",
            name: "usage"
        },
        {
            type: "input",
            message: "What license is your project using?",
            name: "license"
        },
        {
            type: "input",
            message: "Who are the contributors?",
            name: "contributors"
        },
        {
            type: "input",
            message: "What is your Github username?",
            name: "username"
        }
    ]);