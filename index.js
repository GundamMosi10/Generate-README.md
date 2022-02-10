// TODO: Include packages needed for this application
const inquire = require('inquire');
const fs = require('fs');
const inquirer = require('inquirer');

const generateReadme = ({ title, description, usage, installation, license, test, contributors }) =>
'# Title:'
'## Description:'
'## Usage:'
'## Installation:'
'## License:'
'## Test:'
'## Contributors:';

inquirer
    .promt([
        {
            type: 'input',
            title: 'title',
            message: 'What is the title of the project?',
        }
    ])


// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
