var inquirer = require('inquirer'),
    chalk = require('chalk');

var questions = [
    {
        name: 'location',
        message: chalk.green('Where do you want to stay?')
    },
    {
        name: 'date',
        message: chalk.green('When do you want to stay?')
    },
    {
        name: 'nights',
        message: chalk.green('How many nights do you want to stay?')
    }
];

inquirer.prompt(questions).then(function (results) {
    console.log(results);
});