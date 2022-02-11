// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title} \n
  ## Description: 
  ${data.description}
  ## Table of Contents:
  -- [Usage](#usage)
  -- [Installation](#installation)
  -- [License](#license)
  -- [Contributors](#contributors)
  -- [Github User Name](#userName)
  -- [Email](#email)
  ## Usage:
  ${data.usage}
  ## Installation:
  ${data.installation}
  ## License:
  ${data.license}
  ## Contributors:
  ${data.contributors}
  ## Github User Name:
  ${data.userName}
  ## Email:
  ${data.userEmail}

`;
}

module.exports = generateMarkdown;
