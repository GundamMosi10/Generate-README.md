// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'MIT') return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  if(license === 'Apache') return `![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
  if(license === 'Boost Software') return `![License: Boost Software](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)`
  if(license === 'Eclipse Public') return `![License: Eclipse Public](https://img.shields.io/badge/License-EPL_1.0-red.svg)`
  if(license === 'IBM') return `![License: IBM](https://img.shields.io/badge/License-IPL_1.0-blue.svg)`
  return " ";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'MIT') return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)` //change the badges corresponding to the correct license badge 
  if(license === 'Apache') return `![License: Apache](https://img.shields.io/badge/License-MIT-yellow.svg)`
  if(license === 'Boost Software') return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  if(license === 'Eclipse Public') return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  if(license === 'IBM') return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  return " ";
  
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `
  # ${data.title} \n
  ## Description: 
  ${data.description}
  ## Table of Contents:
  -- [Usage](#usage)\n
  -- [Installation](#installation)\n
  -- [License](#license)\n
  -- [Contributors](#contributors)\n
  -- [Github User Name](#Github User Name)\n
  -- [Email](#email)\n
  -- [Test](#test)\n  
  ## Usage:
  ${data.usage}
  ## Installation:
  ${data.installation}
  ## License:
  ${data.license}
  ## License list:
  ${data.licenseList}
  ## Contributors:
  ${data.contributors}
  ## Github User Name:
  ${data.userName}
  ## Email:
  ${data.userEmail}
  ## Test: 
  ${data.test}

`;
}

module.exports = generateMarkdown;


// Apache 2.0 License 
// [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

// Boost Software License 
// [![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)

// Eclipse Public License 1.0
// [![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)

// IBM Public License Version 1.0
// [![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)

// The MIT License
// [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


