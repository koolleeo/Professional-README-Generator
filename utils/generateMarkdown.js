// function to generate markdown for README
function generateMarkdown(data) {
    return `
    
# ${data.title}

## Table of Contents

>[Description](#description)\
>[Installation](#installation)\
>[Usage](#usage)\
>[License](#license)\
>[Contributing](#contributing)\
>[Tests](#tests)\
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

## Questions

${data.questions}

Contact me by email.

[Contact Me](mailto:${data.email})

Visit my GitHub page.

[GitHub page](https://github.com/${data.github}/)
  
  `;
}
  
  module.exports = generateMarkdown;
  