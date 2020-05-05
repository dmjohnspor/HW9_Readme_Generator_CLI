const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const questions = require("./questions")

const writeFileAsync = util.promisify(fs.writeFile);

function userPrompts() { return inquirer.prompt(questions) }

function makeReadme(answers) {
  return `
# ${answers.repo}

> ${answers.description}

![GitHub stars](https://img.shields.io/github/stars/${answers.username}/${answers.repo}?style=social)
![GitHub contributors](https://img.shields.io/github/contributors/${answers.username}/${answers.repo})
![GitHub repo size](https://img.shields.io/github/repo-size/${answers.username}/${answers.repo})
![Star Wars](https://img.shields.io/badge/may%20the%20force-be%20with%20you-blue)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Contact](#contact)
- [License](#license)

## Installation
${answers.installation}

## Usage
${answers.usage}

---

## Contributing

> To get started...

### Step 1

- **Option 1**
    - 🍴 Fork this repo!

- **Option 2**
    - 👯 Clone this repo to your local machine using \`https://github.com/${answers.username}/${answers.repo}.git\`

### Step 2

- **HACK AWAY!** 🔨🔨🔨

### Step 3

- 🔃 Create a new pull request.

    ---

## Contact

Reach out to me at one of the following places!

- Github at <a href = "https://github.com/${answers.username}" target = "_blank">\`${answers.username}\`</a >
- LinkedIn at <a href = "https://www.linkedin.com/in/${answers.linkedin}" target = "_blank"> \`${answers.linkedin}\`</a >
- Email at ${answers.email}

 ---

## License

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg) 
`
}

async function init() {
  try {
    const answers = await userPrompts();

    const readMe = makeReadme(answers);

    await writeFileAsync("readme.md", readMe);

    console.log("Your readme.md is ready!");

  } catch (err) {
    console.log(err);
  }
}

init();
