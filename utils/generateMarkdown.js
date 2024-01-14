function generateMarkdown (data) {
   
    return `

# ${data.title} (${data.license})

## Description

  ${data.description}

## Table of Contents

- [Description](#description)
- [Table Of Contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributors](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

  ${data.installation}

## Usage

  ${data.usage}

## License

  ${data.license}

## Contributors

  ${data.contributing}

## Tests

  ${data.tests}

## Questions

If you have any inquiries, please contact:
- https://github.com/${data.github}
- ${data.email}
      
`;

}
  module.exports = generateMarkdown;