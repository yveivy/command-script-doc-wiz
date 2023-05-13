// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const { writeFile } = require('fs').promises;
const generateREADME = require('./utils/generateMarkdown')

// const createREADME = ( {projectName, description, usage, badge, name, github }) =>

// TODO: Create an array of questions for user input
const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'projectName',
      message: 'What is the name of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of your project.',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What instructions can you provide to utilize this application?',
    },
    {
      type: 'list',
      message: 'Select which badge you would like to include for your license.',
      name: 'badge',
      choices: ['Apache 2.0', 'MIT', 'Artistic', 'None'],
    },
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Please provide your Github Username.',
    },
  ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return writeFile(fileName, data);
}

// TODO: Create a function to initialize app
const init = () => {
  promptUser()
    // Use writeFile method imported from fs.promises to use promises instead of
    // a callback function
    .then((answers) => {
      const markdown = generateREADME(answers);
      return writeToFile('README.md', markdown);
    })
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
};

// Function call to initialize app
init();

// npm init -y
// npm i inquirer@8.2.4