const licenses = require('./licenses');

// function to generate markdown for README
function generateMarkdown(data) {
    return `

![License](${licenses[data.license].imageURL})
    
# ${data.title}

## Table of Contents

>[Description](#description)<br>
>[Installation](#installation)<br>
>[Usage](#usage)<br>
>[License](#license)<br>
>[Contributing](#contributing)<br>
>[Tests](#tests)<br>
>[Questions](#questions)

## Description

${data.description}

## Installation
Steps that should be taken to install your project. 

${data.installation}

## Usage

${data.usage}

## License

This project uses the following license : ${data.license}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions?

${data.questions}

Contact me by email.

[Contact Me](mailto:${data.email})

Visit my GitHub page.

[GitHub page](https://github.com/${data.github}/)
  
  `;
}
  
  module.exports = generateMarkdown;
  