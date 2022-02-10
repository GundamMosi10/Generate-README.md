// TODO: Include packages needed for this application
const inquirer = require('inquirer'); 
const fs = require('fs');


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
            name: 'title',
            message: 'What is the title of the project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'What is the description of the project?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How can we use this project?',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'How do we install this project?',
        },
        {
            type: 'input',
            name: 'license',
            message: 'What is the license of the project?',
        },
        {
            type: 'input',
            name: 'Test',
            message: 'Was this project tested?',
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'Who contributed to this project?',
        },
    ])
    .then((answers) => {
        const readmePageContent = generateReadme(answers);

        fs.writeFile('README.md', readmePageContent, (err) => //this creates the new file 
        err ? console.log(err) : console.log('Successfully created README.md!')
        );
    });


// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
