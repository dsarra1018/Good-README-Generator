// initializing all requires
const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");
const question = require("./script/questions");
const temp = require("./script/template");

// prompt the user to enter information
const answers = inquirer.prompt(question.question);

// axios API call to github
answers.then(({username}) =>{
    const queryUrl = `https://api.github.com/users/${username}`;
    const queryUrl2 = `https://api.github.com/users/${username}/events/public`;

    // getting user avatar
    axios.get(queryUrl).then(response => {
        let avatar = response.data.avatar_url;
        response.userAvatar = avatar;
    })

    // getting user email
    axios.get(queryUrl2).then(response => {
        let userMail = response.data[0].payload.commits[0];
        response.email = userMail;
    })

})
.then((response) => {
    const text = temp.template(JSON.stringify(response));
    console.log(text);
    console.log(response.email);
    
})
// fs.writeFile("README.md", temp.template(answers), function(err){
//     if (err){
//         console.log(err);
//     }
//     else{
//         console.log("README has been generated.");
//     }
// });
