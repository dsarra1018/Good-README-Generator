// initializing all requires
const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");

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
    ])
    .then(({username}) => {
        const queryUrl = `https://api.github.com/users/${username}`;
        const queryUrl2 = `https://api.github.com/users/${username}/events/public`;

        // axios.get(queryUrl).then( response =>{
        //     console.log(response.data);
        // })

        axios.get(queryUrl2).then(response =>{
            console.log(response.data[0].payload.commits[0]);
        })
    })