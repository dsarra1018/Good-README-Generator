// initializing all requires
const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");
const question = require("./script/questions");

// prompt the user to enter information
const answers = inquirer.prompt(question.question);

// axios API call to github
answers.then(({username}) =>{
    const queryUrl = `https://api.github.com/users/${username}`;
    const queryUrl2 = `https://api.github.com/users/${username}/events/public`;

    // getting user avatar
    axios.get(queryUrl).then(response => {
        let avatar = response.data.avatar_url;
        answers.userAvatar = avatar;
    })

    // getting user email
    axios.get(queryUrl2).then(response => {
        let userMail = response.data[0].payload.commits[0];
        answers.email = userMail;
    })

})
answers.then((response) =>{
    let readme = `# ${response.title}

## Description
    
${response.description}
    
## Table of Contents
    
[Installation](#Installation) | [Usage](#Usage) | [Credits](#Credits) | [License](#License)
    

## Installation
    
${response.installation}
    
## Usage
    
${response.usage}
    
    
## Credits
    
${response.contributors}
    
## License
    
${response.license}

![](${response.userAvatar}&s=200)
    
## Badges
    
[![](https://img.shields.io/badge/gitHub-${response.username}-blue?style=plastic)](https://www.github.com/${response.username}) | 
[![](https://img.shields.io/badge/email-${response.email}-purple?style=plastic)](mailto:${response.email})`

    fs.writeFile("README.md", readme, "utf8", function(err){
        if (err){
            console.log(err);
        }
        else {
            console.log("README successfully generated.");
        }
    })
})
