const readMe = require('./lib/writeReadmeFile.js');
const inquirer = require("inquirer");
// How to use inquirer
// https://www.digitalocean.com/community/tutorials/nodejs-interactive-command-line-prompts

// const fs = require("fs");
// const path = require('path');

// const generateMarkdown = require("./utils/generateMarkdown");


function promptUser() {

   inquirer.prompt([
      {
         name: 'project_title',
         message: 'What would you like the project name to be?'
      },
      {
         name: 'description_content',
         message: 'Describe the project, please.'
      }
   ]).then(answers => {

      //  console.log('Answers:', answers);

      const projectName = answers.project_title;
      const description_text = answers.description_content;

      console.log(projectName);
      console.log(description_text);

      // Skeleton of the whole README file is in a template 
      // literal with variables to get filled in by answers
      // from a user to a series of questions.
      // The README file contains following sections:
      // The title of the project
      // Sections:
      // - Description
      // - Table of Contents
      // - Installation
      // - Usage
      // - License
      // - Contributing
      // - Tests
      // - Questions


      const md = `
# Project Title: ${projectName}
---
## Description

${description_text}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Licence](#licence)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Questions

`;

      var data = md;
      readMe.writeReadmeFile(data);
   })
}


// function to initialize program
function init() {
   promptUser();
}

// function call to initialize program
init();
