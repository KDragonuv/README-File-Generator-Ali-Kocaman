
const inquirer = require('inquirer');   // <= Packages required
const fs = require('fs');
const path = require('path');
    
const questions = [  // <= Array of questions for user input

    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a brief description of your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide installation instructions:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide usage information:',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Provide contribution guidelines:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide test instructions:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your application:',
        choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'BSD-3-Clause', 'None'],
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'Enter your GitHub username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
    },
];

 
function writeToFile(fileName, data) {    // <= Function to write README file
    fs.writeFileSync(fileName, data, 'utf-8');
    console.log(`File ${fileName} has been created successfully!`);
  }
  
  
  async function init() {    // <= Function to initialize app
    try {
      const answers = await inquirer.prompt(questions);
      const readmeContent = generateReadmeContent(answers);
      writeToFile('README.md', readmeContent);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }
  
  
  function generateReadmeContent(data) {  // <= Function to generate README content based on user answers

    return `
  # ${data.projectTitle}
  
  ## Description
  ${data.description}
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## License
  This project is licensed under the ${data.license} License.
  
  ## Contact
  GitHub: [${data.githubUsername}](https://github.com/${data.githubUsername})
  Email: ${data.email}
  `;
  }
  
    init();     // <= Function call to initialize app