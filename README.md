
# Project Title: Readme file generator

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

This app generates a professional README file for a software development project in markdown language.
It asks the user a series of questions about the project.
The README file is then formatted in a structured fashion in relevant sections.


## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Licence](#licence)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

The application is driven from a command line using Node.js.
if you do not have node.js installed, please refer to Node.js installation instructions relevant for your operating system.

Clone the application from this repo to your local system:

```
git clone https://github.com/stansaner/Readme-generator.git
```

Then change directory to the cloned repo.

The README file generator also relies on inquirer package.

Make sure that your cloned repo includes a package.json with the required dependencies. 
You can create one by running from the cloned repo directory:

```
npm init
``` 

before installing any dependencies.
To install the inquirer package, from the cloned repo directory run:

```
npm install inquirer
```

Your environment should now be ready to run the application.


## Usage

To start the application, run in the top directory of your cloned repo:

```
node index.js
```

The application will ask series of questions. Where a one-line answer is expected,
enter the answer when prompted on the same line and hit Enter.

Where the expected answer is multi-line or several paragraphs, the application will 
ask to "Press <enter> to launch your preferred editor."
It will then open a session in the default editor configured for your environment.
When done writing, save and exit.

When asking about licence the application offers a menu of available licence templates.
Choose the applicable one using up/down arrows and confirm with Enter.

After answering all questions the application creates a directory "output" if it does
not exist already. It then places the new README.md file in that output directory.

This [walkthrough video](https://drive.google.com/file/d/1-xgxMxA3mi1btMWXZvdBZvDkmFGRZA2D/view) demonstrates how to use this application.


## Licence

MIT

## Contributing

Please refer to the Questions section if you would like to make any changes 
to this application.


## Tests

There are no relevant tests for this application.


## Questions

For more questions please visit:
[https://github.com/stasaner](https://github.com/stasaner)

or send an email to: stan.saner@hotmail.co.uk

      