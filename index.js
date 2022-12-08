// TODO: Include packages needed for this application
// Went back to lesson 20 to find the files to attach at the top
const inquirer = require('inquirer');
const fs = require('fs');

// const { title } = require('process');

// TODO: Create an array of questions for user input
// prev lesson 20 and youtube video https://www.youtube.com/watch?v=2VUQABoFOqw
const generateReadme = ({ title, description, installation, usage, credits, license, contact}) =>

`# Your Project Title`
`${title}`

`## Description`
`${description}`

`## Installation`
`${installation}`

`## Usage`
`${usage}`

`## Credits`
`${credits}`

`## License`
`${license}`


`## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

Badges aren't _necessary_, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.`

`## Contact`
`${contact}`


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
        name: 'contact',
        message: 'What is your email address?',
        validate: (data)=>{ if(data){return true} else {return 'You must enter information to continue'}}
      },
      {
        type: 'input',
        name: 'contact',
        message: 'What is your GitHub user name?',
        validate: (data)=>{ if(data){return true} else {return 'You must enter information to continue'}}
      },
      {
        type: 'input',
        name: 'contact',
        message: 'What is the link to your GitHub account',
        validate: (data)=>{ if(data){return true} else {return 'You must enter information to continue'}}
      },
      {
        type: 'input',
        name: 'contact',
        message: 'What is the link to your Linkedin account?',
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
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
