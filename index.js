const readMe = require('./lib/writeReadmeFile.js');
const inquirer = require("inquirer");
// How to use inquirer
// https://www.digitalocean.com/community/tutorials/nodejs-interactive-command-line-prompts

// const path = require('path');
// const fs = require("fs");


// const generateMarkdown = require("./utils/generateMarkdown");


function promptUser() {

   inquirer.prompt([
      {
         name: 'project_title',
         message: 'What would you like the project name to be?'
      },
      {
         type: 'editor',
         name: 'description_content',
         message: 'Describe the project, please.'
      },
      {
         type: 'editor',
         name: 'installation',
         message: 'Type installation instructions.'
      },
      {
         type: 'rawlist',
         name: 'licence',
         message: 'Choose which licence to use:',
         choices: ['Academic Free License v3.0', 'Apache license 2.0', 'Artistic license 2.0',
                  'Boost Software License 1.0', 'BSD 2-clause "Simplified" license', 
                  'BSD 3-clause "New" or "Revised" license', 'BSD 3-clause Clear license',
                  'Creative Commons license family', 'Creative Commons Zero v1.0 Universal',
                  'Creative Commons Attribution 4.0', 'Creative Commons Attribution Share Alike 4.0',
                  'Do What The F*ck You Want To Public License', 'Educational Community License v2.0',
                  'Eclipse Public License 1.0', 'Eclipse Public License 2.0', 'European Union Public License 1.1',
                  'GNU Affero General Public License v3.0', 'GNU General Public License family',
                  'GNU General Public License v2.0', 'GNU General Public License v3.0', 
                  'GNU Lesser General Public License family', 'GNU Lesser General Public License v2.1',
                  'GNU Lesser General Public License v3.0', 'ISC', 'LaTeX Project Public License v1.3c',
                  'Microsoft Public License', 'MIT', 'Mozilla Public License 2.0', 'None',
                  'Open Software License 3.0', 'PostgreSQL License', 'SIL Open Font License 1.1',
                  'University of Illinois/NCSA Open Source License', 'The Unlicense', 'zLib License']
      }
   ]).then(answers => {

      //  console.log('Answers:', answers);

      const projectName = answers.project_title;
      const description_text = answers.description_content;
      const licence_type = answers.licence;

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

## Licence

${licence_type}

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
