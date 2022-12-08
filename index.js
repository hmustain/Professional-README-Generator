// TODO: Include packages needed for this application
// Went back to lesson 20 to find the files to attach at the top
const inquirer = require('inquirer');
const fs = require('fs');
const {renderLicenseBadge} = require ("./generateMarkdown");

// const { title } = require('process');

// TODO: Create an array of questions for user input
// prev lesson 20 and youtube video https://www.youtube.com/watch?v=2VUQABoFOqw
const generateReadme = ({ title, description, installation, usage, credits, license, email, github, gurl}) =>

`# ${title}

## License
${renderLicenseBadge(license)}

## Description
${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Questions](#questions)

## Installation
${installation}

## Usage
${usage}

## Credits
${credits}


## Questions
If you have questions and would like to email me please email me @ ${email} <br>
My GitHub user name and link to my profile can be found here ${github} ${gurl}
`

inquirer
    .prompt([
       {
         type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
        validate: (data)=>{ if(data){return true} else {return 'You must enter information to continue'}}
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please enter a description about your project',
        validate: (data)=>{ if(data){return true} else {return 'You must enter information to continue'}}
      },
      {
        type: 'list',
        name: 'license',
        message: 'What license did you use?',
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'N/A'],
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: (data)=>{ if(data){return true} else {return 'You must enter information to continue'}}
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub user name?',
        validate: (data)=>{ if(data){return true} else {return 'You must enter information to continue'}}
      },
      {
        type: 'input',
        name: 'gurl',
        message: 'Please provide a link to your GitHub URL',
        validate: (data)=>{ if(data){return true} else {return 'You must enter information to continue'}}
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What are the instructions for installation of the application?',
        validate: (data)=>{ if(data){return true} else {return 'You must enter information to continue'}}
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What are the instructions for usage? (either type out or paste a link to instructions)',
        validate: (data)=>{ if(data){return true} else {return 'You must enter information to continue'}}
      },
      {
        type: 'input',
        name: 'credits',
        message: 'Who do you credit for this project?',
        validate: (data)=>{ if(data){return true} else {return 'You must enter information to continue'}}
      },
    ])


// TODO: Create a function to write README file
.then((answers) => {
    const readmeContent = generateReadme(answers);

    fs.writeFile('README.md', readmeContent, (err) => err ? console.log (err) : console.log ('Successfully created README.md!'));
});
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
