const fs = require('fs');
const dir = './output';

// function to write README file
function writeReadmeFile(data) {

  // Place the newly generated README.md file in the output directory
  // Check whether such directory exists already. If it does not,
  // create it
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  fs.writeFile('README.md', data, (err) => {
    if (err)
      console.log(err);
    else {
      console.log("You have successfully created the README.md file in the output directory");
    }
  });
}

module.exports = { writeReadmeFile };