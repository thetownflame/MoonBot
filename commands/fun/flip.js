const Discord = require('discord.js')
const utils = require('../../utils');


module.exports = {
    name: "flip",
    category: "fun",
  description: "Flips a coin",
  usage: "[command]",
  async execute(client, message, args) {

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
    
  {
  var msg2 = Array(2);
          msg2[1] = "Орёл";
          msg2[2] = "Решка";
          var x = getRandomInt(0, 8);
          if (x < 4){

                const embed = new Discord.MessageEmbed()
                .setTitle(`${msg2[1]}`)
                .setColor("FFFFFF")
              message.channel.send(embed)
          }
          else{
            const embed = new Discord.MessageEmbed()
            .setTitle(`${msg2[2]}`)
                .setColor("FFFFFF")
          message.channel.send(embed)

          }
      }
          
  }
  };