// inuirer all the stuff
// read the tempalte
//fill out the template with the stuff
//write the templated file to index.html

const inquirer = require("inquirer");
const fs = require("fs");
const fsPromises = fs.promises;

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
