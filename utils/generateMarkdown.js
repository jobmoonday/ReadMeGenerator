function generateMarkdown (data) {
   
    return ` #${data.title} (${data.license})
    
    ## Description
    
    ${data.description}

    ## Table of Contents

    - [Description] (#description)
    - [Table Of Contents] (#table-of-content)
    - [Installation] (#installation)
    - [Usage] (#usage)
    - [License] (#license)
    - [Contributors] (#contributors)
    - [Tests] (#)
    - [Questions] (#questions)


    ## Installation

    ${data.inst}

    ##Usage

    ${data.usage}

    ##License

    ${data.license}

    ##Contributors

    ${data.contrb}

    ##Tests

    ${data.tests}

    ##Questions

    Any question please contact:
  - https://github.com/${data.github}
  - ${data.email}
      
    `;

}
  module.exports = generateMarkdown;