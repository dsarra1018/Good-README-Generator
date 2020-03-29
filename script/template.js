const template = (title, description, installation, usage, license, contributors, username, userAvatar, email) => {
    let readme = `# ${title}

    ## Description
    
    ${description}
    
    ## Table of Contents
    
    [Installation](#Installation) | [Usage](#Usage) | [Credits](#Credits) | [License](#License)
    

    ## Installation
    
    ${installation}
    
    ## Usage
    
    ${usage}
    
    
    ## Credits
    
    ${contributors}
    
    ## License
    
    ${license}

    ![](${userAvatar}&s=200)
    
    ## Badges
    
    [![](https://img.shields.io/badge/gitHub-${username}-blue?style=plastic)](https://www.github.com/${username}) | 
    [![](https://img.shields.io/badge/email-${email}-purple?style=plastic)](mailto:${email})`

    

    return readme;
}

module.exports = {
    template
}