// inuirer all the stuff
// read the tempalte
//fill out the template with the stuff
//write the templated file to index.html

const inquirer = require("inquirer");

async function generate() {
  const answers = await inquirer.prompt([{
      type: "input",
      name: "name",
      message: "What is your name",
    },
    {
      type: "input",
      name: "location",
      message: "Where are you?",
    },
    {
      type: "input",
      name: "bio",
      message: "Tell me about you",
    },
    {
      type: "input",
      name: "github",
      message: "Where's the magic code?",
    }]);

  console.log(answers);
}

generate();
