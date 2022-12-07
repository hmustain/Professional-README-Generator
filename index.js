// TODO: Include packages needed for this application
// Went back to lesson 20 to find the files to attach at the top
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
// const questions = [];
inquirer
    .prompt([
       {
         type: 'input',
        name: 'project name',
        message: 'What is the name of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please enter a description about your project',
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
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub user name?',
      },
      {
        type: 'input',
        name: 'github url',
        message: 'What is the link to your GitHub account',
      },
      {
        type: 'input',
        name: 'linkedin',
        message: 'What is the link to your Linkedin account?',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What are the instructions for installation of the application?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What are the instructions for usage? (either type out or paste a link to instructions)',
      },
      {
        type: 'input',
        name: 'credits',
        message: 'Who do you credit for this project?',
      },
    ])

// Template for README.md
const template = `# ${title}

* [description](#description)
* [license](#license)
* [email](#email)
* [github](#github)
* [github url](#github url)
* [linkedin](#linkedin)
* [installation](#installation)
* [usage](#usage)
* [credits](#credits)

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
