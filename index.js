// TODO: Include packages needed for this application
const inquirer = require('inquirer'); //inquirer package remember to install on command line
const fs = require('fs'); //Filesystem
const generateMarkdown = require('./utils/generateMarkdown'); //This line connects to the generateMarkdown.js file


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the this project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'How would you describe this project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How would you use this application?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How to install this project?',
    },
    {
        type: 'checkbox',
        name: 'license',
        choices: ['MIT', 'Apache 2.0', 'Boost Software', 'Eclipe Public', 'IBM Public'],
        message: 'What is the license used for this project?',
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
        name: 'userEmail',
        messsage: 'What is the best email to contact you?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'How was this project tested?',
    }
]

function writeFile(fileName, answers){ //this takes the answers from the prompt above and plugs them into the README file
    fs.writeFile(fileName, answers, (err) => 
        err ? console.log(err) : console.log('Successfully created the README.md') //lets us know the README has been written succesfully 
        )}

// TODO: Create a function to initialize app
function initialize() {
    inquirer.prompt(questions)
    .then((answers) => {
        console.log(answers)
        writeFile('README.md', generateMarkdown(answers))
    })
}
    
//Function call to initialize app
initialize();


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
//         const generateMarkdown = generateReadme(answers);

//         fs.writeFile('README.md', generateMarkdown, (err) => //this creates the new file 
//         err ? console.log(err) : console.log('Successfully created README.md!')
//         );
//     });
