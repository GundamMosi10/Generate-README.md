// TODO: Include packages needed for this application
const inquirer = require('inquirer'); 
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// const generateReadme = ({ title, description, usage, installation, license, test, contributors, questions }) =>
// '# Title:\n## Description:\n## Usage:\n## Installation:\n## License:\n## Test:\n## Contributors:\n## Questions:\n';

// inquirer
//     .prompt([
//         {
//             type: 'input',
//             name: 'title',
//             message: 'What is the title of the project?',
//         },
//         {
//             type: 'input',
//             name: 'description',
//             message: 'What is the description of the project?',
//         },
//         {
//             type: 'input',
//             name: 'usage',
//             message: 'How can we use this project?',
//         },
//         {
//             type: 'input',
//             name: 'installation',
//             message: 'How do we install this project?',
//         },
//         {
//             type: 'input',
//             name: 'license',
//             message: 'What is the license of the project?',
//         },
//         {
//             type: 'input',
//             name: 'Test',
//             message: 'Was this project tested?',
//         },
//         {
//             type: 'input',
//             name: 'contributors',
//             message: 'Who contributed to this project?',
//         },
//         {
//             type: 'input',
//             name: 'questions',
//             message: 'Any questions contact me here:',
//         }
//     ])
//     .then((answers) => {
//         const readmePageContent = generateReadme(answers);

//         fs.writeFile('README.md', readmePageContent, (err) => //this creates the new file 
//         err ? console.log(err) : console.log('Successfully created README.md!')
//         );
//     });


// // TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the this project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of this project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How to install this project?',
    },
    {
        type: 'input',
        name: 'license',
        message: 'What is the license used for this project?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Have you tested this project?',
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Who are the contributors for this project?',
    },
    {
        type: 'input',
        name: 'userName',
        messsage: 'What is the user name of your GitHub profile?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    },
]

function writeFile(fileName, answers){
    fs.writeFile(fileName, answers, (err) => 
        err ? console.log(err) : console.log('Successfully created the README.md')
        )}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        console.log(answers)
        writeFile('README.md', generateMarkdown(answers))
    })
}
    
// Function call to initialize app
init();
