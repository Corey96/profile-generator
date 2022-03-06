// inuirer all the stuff
// read the tempalte
//fill out the template with the stuff
//write the templated file to index.html

const inquirer = require('inquirer');
const {promises: fs} = require("fs");

async function generate() {
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name"
    },
    {
      type: "input",
      name: "location",
      message: "Where are you?"
    },
    {
      type: "input",
      name: "bio",
      message: "Tell me about you"
    },
    {
      type: "input",
      name: "github",
      message: "Where's the magic code?"
    }])

  const templateContents = await fs.readFile("./template/template.html")
  const newTemplateContents = Object
    .keys(answers)
    .reduce((previous, current) => previous.replace(`{{${current}}}`, answers[current]), templateContents.toString())
  await fs.writeFile("index.html", newTemplateContents)
}

generate();
