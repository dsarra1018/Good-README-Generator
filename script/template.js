const template = (title, description, installation, usage, license, contributors, username) => {
    `# ${title}

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
    
    ## Badges
    
    `
}