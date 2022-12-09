// TODO: Include packages needed for this application
// Went back to lesson 20 to find the files to attach at the top
// packages included are inquireer, fs, and functions from the generateMarkdown file
const inquirer = require('inquirer');
const fs = require('fs');
const { renderLicenseBadge, renderLicenseLink, renderLicenseSection, renderContributingBadge, renderContributingLink } = require("./generateMarkdown");


// TODO: Create an array of questions for user input
// prev lesson 20 and youtube video https://www.youtube.com/watch?v=2VUQABoFOqw
// generateRedme function: 1st list is just a list of parameters to be included in the function. then the layout of the readme is below it and that is the order of the readme to be dynamically generated based on user input
const generateReadme = ({ username, title, description, installation, usage, credits, license, email, github, gurl, contributing, tests }) =>

  `# ${title}
${renderLicenseBadge(license)}

## Description
${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Contributing](#contributing)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${installation}

## Usage
${usage}

## Credits
${credits}

## Contributing
${renderContributingBadge(contributing)} <br>
${renderContributingLink(contributing)}

## License
${renderLicenseBadge(license)}
${renderLicenseSection(license, username)}
${renderLicenseLink(license)}

## Tests
${tests}

## Questions
If you have questions and would like to email me please email me @ ${email} <br>
My GitHub user name and link to my profile can be found by clicking my username <a href="${gurl}">${github}</a>

`
// using inquirer prompt, this is the list of questions that will generate that the user must answer to have his/her readme dynamically generated
inquirer
  .prompt([
    {
      type: 'input',
      name: 'username',
      message: 'What is your first and last name?',
      validate: (data) => { if (data) { return true } else { return 'You must enter information to continue' } }
    },
    {
      type: 'input',
      name: 'title',
      message: 'What is the name of your project?',
      validate: (data) => { if (data) { return true } else { return 'You must enter information to continue' } }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please enter a description about your project',
      validate: (data) => { if (data) { return true } else { return 'You must enter information to continue' } }
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
      validate: (data) => { if (data) { return true } else { return 'You must enter information to continue' } }
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub user name?',
      validate: (data) => { if (data) { return true } else { return 'You must enter information to continue' } }
    },
    {
      type: 'input',
      name: 'gurl',
      message: 'Please provide a link to your GitHub URL',
      validate: (data) => { if (data) { return true } else { return 'You must enter information to continue' } }
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the instructions for installation of the application?',
      validate: (data) => { if (data) { return true } else { return 'You must enter information to continue' } }
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What are the instructions for usage? (either type out or paste a link to instructions)',
      validate: (data) => { if (data) { return true } else { return 'You must enter information to continue' } }
    },
    {
      type: 'input',
      name: 'credits',
      message: 'Who do you credit for this project?',
      validate: (data) => { if (data) { return true } else { return 'You must enter information to continue' } }
    },
    {
      type: 'list',
      name: 'contributing',
      message: 'Do you want to allow other developers to contribute to your project?',
      choices: ['Yes', 'No'],
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Enter all the different tests that can be performed with code examples. If not, just put n/a',
      validate: (data) => { if (data) { return true } else { return 'You must enter information to continue' } }
    },
  ])


  // TODO: Create a function to write README file
  // after the questions are answered, then the answers are put into a function that will dynamically generate using the fs.writeFile method
  .then((answers) => {
    const readmeContent = generateReadme(answers);

    fs.writeFile('README.md', readmeContent, (err) => err ? console.log(err) : console.log('Successfully created README.md!'));
  });

