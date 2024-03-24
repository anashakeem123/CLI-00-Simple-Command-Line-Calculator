#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const Answer = await inquirer.prompt([
    {
        message: chalk.blue.bold.italic.bgYellowBright.bold("Kindly Enter Your First Number"),
        type: "number",
        name: "FirstNumber",
    },
    {
        message: chalk.white.bold.italic.bgGreen.bold.underline("Kindly Enter Your Second Number"),
        type: "number",
        name: "SecondNumber",
    },
    {
        message: chalk.black.yellow.underline.italic("*Select one of the operator to perform operation*"),
        type: "list",
        name: "operator",
        choices: [
            "Addition",
            "Subtraction",
            "Multiplication",
            "Exponentiation",
            "Division",
            "Modulus",
        ],
    },
]);
// "Conditional Statements":
if (Answer.operator == "Addition") {
    console.log(chalk.whiteBright.bgRed("Your value is"), Answer.FirstNumber + Answer.SecondNumber);
}
else if (Answer.operator == "Subtraction") {
    console.log(chalk.redBright.bgBlue("Your value is"), Answer.FirstNumber - Answer.SecondNumber);
}
else if (Answer.operator == "Multiplication") {
    console.log(chalk.black.bgYellow("Your value is"), Answer.FirstNumber * Answer.SecondNumber);
}
else if (Answer.operator == "Exponentiation") {
    console.log(chalk.black.bgGreen("Your value is"), Answer.FirstNumber ** Answer.SecondNumber);
}
else if (Answer.operator == "Division") {
    console.log(chalk.gray.bgWhite("Your value is"), Answer.FirstNumber / Answer.SecondNumber);
}
else if (Answer.operator == "Modulus") {
    console.log(chalk.blue.bgYellow("Your value is"), Answer.FirstNumber % Answer.SecondNumber);
}
else {
    console.log(chalk.yellow.bgWhite.underline("Please select valid operator"));
}
