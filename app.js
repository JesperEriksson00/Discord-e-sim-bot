var request = require('request');
const Discord = require('discord.js');


const bot = new Discord.Client();


const token = 'TOKEN_HERE';

bot.on('ready', () => {
  bot.user.setGame('.help 4 help.')

    console.log('ready')
});

bot.on('message', message => {
  var str = message.content;
  var lowerCase = str.toLowerCase();

    if (lowerCase === '.regering') {

        message.channel.sendMessage('CURRENT_GOV_GOES_HERE');
    }
});

bot.on('message', message => {
  var str = message.content;
  var lowerCase = str.toLowerCase();

    if (lowerCase === '.gov') {

        message.channel.sendMessage('CURRENT_GOV_GOES_HERE');
    }
});

bot.on('message', message => {
  var str = message.content;
  var lowerCase = str.toLowerCase();

    if (lowerCase === '.help') {

        message.channel.sendMessage('HELP_MESSAGE_GOES_HERE');
    }
});

bot.on('message', message => {
var str = message.content;
var lowerCase = str.toLowerCase();
var res1 = lowerCase.charAt(0);
if (res1 = '.') {
    var res = lowerCase.split(' ');
    if (res[0] === '.dmg') {
        var api = 'http://suna.e-sim.org/apiCitizenByName.html?name=';
        var name = res[1];
        var url = api + name;

        request(url, function(error, response, body){
          if(error){
            console.log(error);
          } else{

          var obj = JSON.parse(body);
            message.channel.sendMessage('**' + obj.login + '´s**' + ' **Total damage: **' + ' ' + '*' + obj.totalDamage + '*'  + ' | ' + '**' + obj.login + '´s**' + ' **Damage today:**' + ' ' + '*' + obj.damageToday + '*');
          }


        })

    }


  }
}


)

bot.on('message', message => {
var str = message.content;
var lowerCase = str.toLowerCase();
var res1 = lowerCase.charAt(0);
if (res1 = '.') {
    var res = lowerCase.split(' ');
    if (res[0] === '.link') {
        var api = 'http://suna.e-sim.org/apiCitizenByName.html?name=';
        var name = res[1];
        var url = api + name;

        request(url, function(error, response, body){
          if(error){
            console.log(error);
          } else{

          var obj = JSON.parse(body);
            message.channel.sendMessage('**' + obj.login + '´s**' + ' **Link:** http://suna.e-sim.org/profile.html?id=' + obj.id);
          }


        })

    }
}


})

bot.on('message', message => {
var str = message.content;
var lowerCase = str.toLowerCase();
var res1 = lowerCase.charAt(0);
if (res1 = '.') {
    var res = lowerCase.split(' ');
    if (res[0] === '.info') {
        var api = 'http://suna.e-sim.org/apiCitizenByName.html?name=';
        var name = res[1];
        var url = api + name;

        request(url, function(error, response, body){
          if(error){
            console.log(error);
          } else{

          var obj = JSON.parse(body);
            message.channel.sendMessage('**' + obj.login + '´s Info\n**Level:** ' + obj.level + ' **| Citizenship:** ' + obj.citizenship + ' **| Rank:** ' + obj.rank + ' **| ECO-Skill:** ' + obj.economySkill + ' **| Total damage:** ' + obj.totalDamage + ' **| Todays damage:** ' + obj.damageToday + '**');
          }


        })

    }
}


})

bot.on('message', message => {
var str = message.content;
var lowerCase = str.toLowerCase();
var res1 = lowerCase.charAt(0);
if (res1 = '.') {
    var res = lowerCase.split(' ');
    if (res[0] === '.donate') {
        var api = 'http://suna.e-sim.org/apiCitizenByName.html?name=';
        var name = res[1];
        var url = api + name;

        request(url, function(error, response, body){
          if(error){
            console.log(error);
          } else{

          var obj = JSON.parse(body);
            message.channel.sendMessage('**(' + obj.login + ')**' + ' **Donate Money:** http://suna.e-sim.org/donateMoney.html?id=' + obj.id + ' **|** ' + '**(' + obj.login + ')**' + ' **Donate Items:** http://suna.e-sim.org/donateProducts.html?id=' + obj.id);
          }


        })

    }
}


})





bot.login(token);
