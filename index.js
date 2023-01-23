const fs = require("fs");
// const path = require('path');

// How to use inquirer
// https://www.digitalocean.com/community/tutorials/nodejs-interactive-command-line-prompts

const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


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
   # Project Title: $(projectName)
   ---
   ## Description

   $(description_text)

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

// array of questions for user
const questions = [

];

//

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
  })
}

// function to write README file
// function writeToFile(fileName, data) {

//   return fs.writeFile(data.file_name + '.txt', data.content)
//     .then(() => {
//       console.log(`You have successfully created the ${data.file_name} file`);
//       console.log(`The contents of the file are:\n${data.content}`);
//     });
// }


// function to initialize program
function init() {
   promptUser();
}

// function call to initialize program
init();
