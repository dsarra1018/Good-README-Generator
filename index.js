// initializing all requires
const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");
const question = require("./script/questions");

async function generateREADME() {
    try{
        // prompt the user to enter information
        const answers = await inquirer.prompt(question.question);

        // getting user avatar
        let avatar = await axios.get(`https://api.github.com/users/${answers.username}`);
        answers.userAvatar = avatar.data.avatar_url;

        // getting user email
        let email = await axios.get(`https://api.github.com/users/${answers.username}/events/public`);
        answers.userMail = email.data[0].payload.commits[0].author.email;

        // template literal
        let readme = `# ${answers.title}

## Description
            
${answers.description}
            
## Table of Contents
            
[Installation](#Installation) | [Usage](#Usage) | [Contributing](#Contributing) | [License](#License) | [Test](#Test)
            
        
## Installation
            
${answers.installation}
            
## Usage
            
${answers.usage}
            
            
## Contributing
            
${answers.contributors}
            
## License
            
${answers.license}
        
## Test

${answers.test}
        
![](${answers.userAvatar}&s=200)
            
## Questions
            
[![](https://img.shields.io/badge/gitHub-${answers.username}-blue?style=plastic)](https://www.github.com/${answers.username}) | 
[![](https://img.shields.io/badge/email-${answers.userMail}-purple?style=plastic)](mailto:${answers.userMail})`
    
        // writing a file
        fs.writeFile("README.md", readme, "utf8", function(err){
            if (err){
                console.log(err);
            }
            else {
                console.log("README successfully generated.");
            }
        })

        

    }catch(err){
        console.log(err);
    }
}


generateREADME();

