// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // badge link
  //https://img.shields.io/badge/license-${license}-blue.svg
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // same pattern 
  return `## License
  This repository has the ${license} license.`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Table of Contents
  - [Summary](#Summary)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contributing](#Contributing)
  - [Tests](#Tests)
  - [Questions](#Questions)
  
  ## Summary
  ${data.description}
  
  ## Installation

  ## Usage

  ## License
  ${data.license}

  ## Contributing
  ${data.contributor}

  ## Tests

  
  ** Questions
  Feel free to reach out to me via my [GitHub profile](https://github.com/${data.username}) with any questions.
  My email address is ${data.email} for job inquiries and other questions. Thank you!
  
  ---
  Copyright © 2022 [${data.author}]
`;
}

module.exports = generateMarkdown;
