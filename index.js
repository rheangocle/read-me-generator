// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer
    .prompt([
      // {
      //   type: 'input',
      //   message: 'What is the name of the author?',
      //   name: 'author',
      //   validate: function (input) {
      //     if (input.length == 0) {
      //       return console.log('Please enter your name.');
      //     } else { return true };
      //   }
      // },
      // {
      //   type: 'input',
      //   message: 'What is the name of your repository?',
      //   name: 'repoName',
      //   validate: function (input) {
      //     if (input.length == 0) {
      //       return console.log('Please enter a valid repository name.');
      //     } else { return true };
      //   }
      // },
      // {
      //   type: 'input',
      //   message: 'What is the your GitHub username?',
      //   name: 'username',
      //   validate: function (input) {
      //     if (input.length == 0) {
      //       return console.log('Please enter a GitHub username.');
      //     } else { return true };
      //   }
      // },
      // {
      //   type: 'input',
      //   message: 'What is your email?',
      //   name: 'email',
      //   validate: (input) => {
      //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      //     if (!emailRegex.test(input)) {
      //       return "You have to provide a valid email address!"
      //     }
      //     return true
      //   }
      // },
      {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
        validate: function (input) {
          if (input.length == 0) {
            return console.log('A project title is required.');
          } else { return true };
        }
      },
      {
        type: 'list',
        message: 'Select the license(s) you want for this project: ',
        name: 'license',
        choices: ['MIT', 'Apache 2', 'GPL', 'Boost', 'BDS 2', 'BDS 3', 'CC0', 'Eclipse', 'Hippocratic', 'IBM', 'ISC', 'Mozilla', 'Perl', 'SIL', 'None']
      },
      // {
      //   type: 'input',
      //   message: 'Enter a description for your project: ',
      //   name: 'description',
      //   validate: function (input) {
      //     if (input.length == 0) {
      //       return console.log('A project description is required.');
      //     } else { return true };
      //   }
      // },
      {
        type: 'input',
        message: 'What installations are required for this project?',
        name: 'installation',
        validate: function (input) {
          if (input.length == 0) {
            return console.log('A project description is required.');
          } else { return true };
        }
      },
      // {
      //   type: 'input',
      //   message: 'Would you like to include any contributers to this project?',
      //   name: 'contributer',
      //   validate: function (input) {
      //     if (input.length == 0) {
      //       return console.log('A project description is required.');
      //     } else { return true };
      //   }
      // },
      // {
      //   type: 'input',
      //   message: 'Would you like to add tests for this project?',
      //   name: 'test',
      //   validate: function (input) {
      //     if (input.length == 0) {
      //       return console.log('A project description is required.');
      //     } else { return true };
      //   }
      // },
    ])
}


// TODO: Create a function to write README file
function writeToFile(data) {
  fs.writeFile('README.md', data, err => {
    if (err) throw err;
    console.log('Your README file has been created');
  })
}

// TODO: Create a function to initialize app
function init() {
  questions()
    .then(input => {
      return generateMarkdown(input);
    })
    .then(data => {
      return writeToFile(data)
    })
    .catch(err => {
      console.log(err)
    })
}

// Function call to initialize app
init();
