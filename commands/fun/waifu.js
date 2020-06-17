
const Discord = require("discord.js");
const superagent = require("snekfetch");
     
module.exports = {
  name: "waifu",
  category: "fun",
description: "Allows you to kiss another user",
usage: "[command | user]",
async execute(client, message, args) {
            if(message.guild === null)return;

            superagent.get('https://nekos.life/api/v2/img/waifu')
                .end((err, response) => {
              const lewdembed = new Discord.MessageEmbed()
              .setDescription(message.author.toString() + " This is your waifu!")
              .setImage(response.body.url)
              .setColor(`RANDOM`)
              .setURL(response.body.url);
          message.channel.send(lewdembed);
            })
          
        }
};
