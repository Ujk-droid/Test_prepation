import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        message: "Please enter first no",
        type: "number",
        name: "firstnumber",
    },
    {
        message: "Please enter second no",
        type: "number",
        name: "secondnumber",
    },
    {
        message: "select operator to perform operation",
        type: "list",
        name: "operator",
        choices: ["add", "sub"],
    }
]);
if (answers.operator === "add") {
    console.log(answers.firstnumber + answers.secondnumber);
}
else if (answers.operator === "sub") {
    console.log(answers.firstnumber - answers.secondnumber);
}
else {
    console.log("invalid no");
}
