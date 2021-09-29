// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'BSD':
      return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
    case 'Apache':
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    case 'Mozilla':
      return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'BSD':
      return '(https://opensource.org/licenses/BSD-3-Clause)'
    case 'Apache':
      return '(https://opensource.org/licenses/Apache-2.0)'
    case 'MIT':
      return '(https://opensource.org/licenses/MIT)'
    case 'Mozilla':
      return '(https://opensource.org/licenses/MPL-2.0)'
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }

  const renderBadge = renderLicenseBadge(license)

  const renderLink = renderLicenseLink(license)

  var licenseSection = `## License\n${renderBadge}\n${renderLink}\n`

  return licenseSection;
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {


  // readMe contents = description, installation instructions,
  // usage information, contribution guidelines,  test instructions

  let README = ''

  const tableContentSection = `
  ## Table of Contents
  [Description](#description) 
  [Installation Instructions](#installationInstructions)
  [Usage Information](#usageInformation)
  [Contribution Guidelines](#contributionGuidelines)
  [Test Instructions](#testInstructions)` 
  

  const licenseSection = renderLicenseSection(data.license)

  const description = `<a name="#description"/>## Description\n\n${data.description}`

  const installationInstructions = `<a name="#installationInstructions"/>## Installation Instructions\n\n${data.installationInstructions}`

  const usageInformation = `<a name="#usageInformation"/>## Usage Information\n\n${data.usageInformation}`

  const contributionGuidelines = `<a name="#contributionGuidelines"/>## Contribution Guidelines\n\n${data.contributionGuidelines}`

  const testInstructions = `<a name="#testInstructions"/>## Test Instructions\n\n${data.testInstructions}`

  README += `# ${data.title}\n${tableContentSection}\n${data.username}\n${data.email}\n${licenseSection}\n${description}\n${installationInstructions}\n${usageInformation}\n${contributionGuidelines}\n${testInstructions}\n`

  return README

}

module.exports = generateMarkdown;
