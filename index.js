const fetch = require('node-fetch');
const moment = require('moment');
const chalk = require('chalk');
const rs = require('readline-sync');

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

(async () => {
	console.clear()
console.log(`
██╗  ██╗    ███╗   ██╗ ██████╗ ██████╗ ███████╗ █████╗ ██╗     ███████╗
╚██╗██╔╝    ████╗  ██║██╔═══██╗██╔══██╗██╔════╝██╔══██╗██║     ██╔════╝
 ╚███╔╝     ██╔██╗ ██║██║   ██║██████╔╝█████╗  ███████║██║     ███████╗
 ██╔██╗     ██║╚██╗██║██║   ██║██╔══██╗██╔══╝  ██╔══██║██║     ╚════██║
██╔╝ ██╗    ██║ ╚████║╚██████╔╝██║  ██║███████╗██║  ██║███████╗███████║
╚═╝  ╚═╝    ╚═╝  ╚═══╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚══════╝╚══════╝
 ${chalk.red('Type : X PUBLIC TOOL BY NOREALS')}
 By : ${chalk.red('@Only_NoRealss')} - ${chalk.blue('X CHEAT DEVELOPER SINCE 2019')}
`);
const auth = rs.question('Enter Your Auth Token : ');
  console.log('');
console.clear()
  while (true) {
    
    const GoStumble = (auth) => new Promise((resolve, reject) => {

  fetch('http://kitkabackend.eastus.cloudapp.azure.com:5010/round/finishv2/3', {
    method: 'GET',
    headers: {
      'authorization': auth
    }
  })
    .then(res => res.text())
    .then(data => {
      resolve(data);
    })
    .catch(err => {
      reject(err);
    });

});

  

    const result = await GoStumble(auth);
    if (!result) {

      console.error(chalk.red(`[ ${moment().format('HH:mm:ss')} ] Auth Token Expired ?`));

    } else if (result.includes('User')) {

      const data = JSON.parse(result);
      const username = data.User.Username;
      const country = data.User.Country;
      const trophy = data.User.SkillRating;
      const crown = data.User.Crowns;

console.log(chalk.white(`Time : [ ${moment().format('HH:mm:ss')} ] ${chalk.yellow(`User : ${username}`)} | ${chalk.blue(`Trophy : ${trophy}`)} | ${chalk.red(`Crown : ${crown}`)}`));
await sleep(500);

    } else if (result == 'BANNED') {
      console.log(chalk.bgRed(`YOUR ACCOUT HAS BEN BANNED`));
     break;
    }
  }


})();
