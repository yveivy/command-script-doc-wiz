// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(badge) {
  if (badge === 'MIT') { 
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (badge === 'Apache') {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if (badge === 'Artistic') {
    return `[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)`
  }else {
    return 'None';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateREADME(data) {
  const licenseBadge = renderLicenseBadge(data.badge);
  // const licenseSection = renderLicenseSection(data.badges);
  return `## ${data.projectName}

## Description:

${data.description}

## Installation:

${data.usage}

## License:

${licenseBadge}

## Contact:

If you would like additional information, please contact ${data.name}
My GitHub username is ${data.github}
`;

};

module.exports = generateREADME;