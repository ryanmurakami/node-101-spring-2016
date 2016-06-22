var chalk = require('chalk');

module.exports = function(hotels) {
    console.log(chalk.green('We\'ve found ' + hotels.length + ' hotels for you!'));
    hotels.sort(function (a, b) {
        if (a.name < b.name) {
            return -1;
        } 
        if (b.name < a.name) {
            return 1;
        }
        return 0;
    });
    for (var ix in hotels) {
      console.log(chalk.blue(`> ${hotels[ix].name}`));
      console.log(chalk.blue(`\t ${hotels[ix].description}`));
    }
}