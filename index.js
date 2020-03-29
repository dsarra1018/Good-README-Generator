// initializing all requires
const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");
const question = require("./script/questions");
const temp = require("./script/template");

// prompt the user to 
const answers = inquirer.prompt(question.question);
answers.then(({username}) => {
    const queryUrl = `https://api.github.com/users/${username}`;
    const queryUrl2 = `https://api.github.com/users/${username}/events/public`;

    // axios.get(queryUrl).then( response =>{
    //     console.log(response.data);
    // })

    axios.get(queryUrl2).then(response =>{
        console.log(response.data[0].payload.commits[0]);
    })
})