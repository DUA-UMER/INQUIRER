import inquirer from 'inquirer';
let user = await inquirer.prompt({
    type: "number",
    name: "age",
    message: "what is your age:"
});
console.log("inshaallah after" + (60 - user.age) + " years you will be 60 years old");
