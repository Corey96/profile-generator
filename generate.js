const inquirer = require('inquirer');
const {promises: fs} = require("fs");

async function generate() {
  const answers = await inquirer.prompt([{
      type: "input",
      name: "name",
      message: "What is your name?"
    },
    {
      type: "input",
      name: "location",
      message: "Where are you located?"
    },
    {
      type: "input",
      name: "bio",
      message: "Tell me about you"
    },
    {
      type: "input",
      name: "github",
      message: "What is your github username?"
    }])

  const templateContents = await fs.readFile('./template/template.html')
  const newTemplateContents = Object
    .keys(answers)
    .reduce((previous, current) => previous.replace(`{{${current}}}`, answers[current]), templateContents.toString())
  await fs.writeFile('index.html', newTemplateContents)
}

generate();
