// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string 
//
const licenseArray = ["Apache license 2.0", "BSD 2-clause license", "BSD 3-clause license","MIT"]
function renderLicenseBadge(license) 
{ if (license === licenseArray [0]) {
  return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)]"
} else if (license === licenseArray[1]){
  return  "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)]"
} else if (license === licenseArray[2]){
  return  "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)]"
} else if (license === licenseArray[3]){
  return  "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)]"
} else {
  return ""
}
}
 

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === licenseArray [0]){
  return `[${licenseArray[0]}](https://opensource.org/licenses/Apache-2.0)`
} else if (license===licenseArray[1]){
  return "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)"
}  else if (license===licenseArray[2]){
  return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
}  else if (license===licenseArray[3]){
  return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}



module.exports = generateMarkdown;
