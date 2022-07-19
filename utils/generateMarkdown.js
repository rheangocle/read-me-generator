// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      break;
    case 'Apache 2':
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0)`;
      break;
    case 'GPL':
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
      break;
    case 'Boost':
      return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
      break;
    case 'BSD 2':
      return `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`;
      break;
    case 'BSD 3':
      return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
      break;
    case 'CC0':
      return `[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)`;
      break;
    case 'Eclipse':
      return `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
      break;
    case 'Hippocratic':
      return `[![License: Hippocratic 2.1](https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)](https://firstdonoharm.dev)`;
      break;
    case 'IBM':
      return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`;
      break;
    case 'ISC':
      return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
      break;
    case 'Mozilla':
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
      break;
    case 'Perl':
      return `[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)`;
      break;
    case 'SIL':
      return `[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1`;
      break;
    default:
      return '';
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseName(license) {
  switch (license) {
    case 'MIT':
      return `MIT License`;
      break;
    case 'Apache 2':
      return `Apache License 2.0`;
      break;
    case 'GPL':
      return `GNU General Public License v3.0 or later`;
      break;
    case 'Boost':
      return `Boost Software License 1.0`;
      break;
    case 'BSD 2':
      return `BSD 2-Clause "Simplified" License`;
      break;
    case 'BSD 3':
      return `BSD 3-Clause "New" or "Revised" License`;
      break;
    case 'CC0':
      return `Creative Commons Zero v1.0 Universal`;
      break;
    case 'Eclipse':
      return `Eclipse Public License 1.0`;
      break;
    case 'Hippocratic':
      return `Hippocratic License 2.1`;
      break;
    case 'IBM':
      return `IBM PowerPC Initialization and Boot Software`;
      break;
    case 'ISC':
      return `ISC License`;
      break;
    case 'Mozilla':
      return `Mozilla Public License 1.0`;
      break;
    case 'Perl':
      return `Artistic License 1.0 (Perl)`;
      break;
    case 'SIL':
      return `SIL Open Font License 1.0`;
      break;
    default:
      return '';
      break;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  //SPDX identifier for license
  switch (license) {
    case 'MIT':
      return `MIT`;
      break;
    case 'Apache 2':
      return `Apache-2.0`;
      break;
    case 'GPL':
      return `GPL-3.0-or-later`;
      break;
    case 'Boost':
      return `BSL-1.0`;
      break;
    case 'BSD 2':
      return `BSD-2-Clause`;
      break;
    case 'BSD 3':
      return `BSD-3-Clause`;
      break;
    case 'CC0':
      return `CC0-1.0`;
      break;
    case 'Eclipse':
      return `EPL-1.0`;
      break;
    case 'Hippocratic':
      return `Hippocratic-2.1`;
      break;
    case 'IBM':
      return `IBM-pibs`;
      break;
    case 'ISC':
      return `ISC`;
      break;
    case 'Mozilla':
      return `MPL-1.0`;
      break;
    case 'Perl':
      return `Artistic-1.0-Perl`;
      break;
    case 'SIL':
      return `OFL-1.0`;
      break;
    default:
      return '';
      break;
  }
}

//Capitalize first letter of every word for titles, name, etc. 
function capitalize(str) {
  const words = str.split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }

  return words.join(" ");
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  //Get current 4 digit year
  const currentYear = new Date().getFullYear();

  return `
  # ${capitalize(data.title)}

  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  - [Summary](#Summary)
  - [Installations](#Installations)
  - [Tests](#Tests)
  - [Mock-up](#Mock-up)
  - [Questions](#Questions)
  - [Contributing](#Contributing)
  - [License](#License)

  ## Summary
  ${data.description}

  ## Installations

  - ✅${capitalize(data.installation)}

  ## Tests
  ${data.test}

  ## Mock-up
  ![Image/GIF](${data.image})

  ## Questions
  Feel free to reach out to me via my [GitHub profile](https://github.com/${data.username}) with any questions. My email address is ${data.email} for job inquiries and other questions. Thank you!

  ## Contributing
  ${data.contributor}

  ---
  #### Copyright © [${currentYear}] [${capitalize(data.author)}]

  #### License
  ##### This project licensed under the ${renderLicenseName(data.license)}. SPDX short identifier: ${renderLicenseSection(data.license)}. Please follow the link in the badge for more details. 
  `
    ;
}

module.exports = generateMarkdown;
