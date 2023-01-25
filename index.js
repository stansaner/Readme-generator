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
      let badge = '';

      // Markdown Licence Badges where available
      // https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba

      switch (licence_type) {
         case 'Apache license 2.0':
            badge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
            break;

         case 'Artistic license 2.0':
            badge = "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)";
            break;

         case 'Boost Software License 1.0':
            badge = "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
            break;

         case 'BSD 2-clause "Simplified" license':
            badge = "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
            break;

         case 'BSD 3-clause Clear license':
            badge = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
            break;

         case 'Creative Commons Zero v1.0 Universal':
            badge = "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)";
            break;

         case 'Creative Commons Attribution 4.0':
            badge = "[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)";
            break;

         case 'Creative Commons Attribution Share Alike 4.0':
            badge = "[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC_BY--SA_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)";
            break;

         case 'Do What The F*ck You Want To Public License':
            badge = "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)";
            break;

         case 'Eclipse Public License 1.0':
            badge = "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
            break;

         case 'GNU Affero General Public License v3.0':
            badge = "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
            break;

         case 'GNU General Public License v2.0':
            badge = "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
            break;

         case 'GNU General Public License v3.0':
            badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
            break;

         case 'GNU Lesser General Public License v3.0':
            badge = "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
            break;

         case 'ISC':
            badge = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
            break;

         case 'MIT':
            badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
            break;

         case 'Mozilla Public License 2.0':
            badge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
            break;

         case 'The Unlicense':
            badge = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
            break;

         case 'zLib License':
            badge = "[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)";
            break;

         default:
            badge = '';
      }

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

         ${badge}

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
