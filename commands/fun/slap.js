
const Discord = require("discord.js");
const superagent = require("snekfetch");
const utils = require('../../utils');

        module.exports = {
            name: "slap",
            category: "fun",
          description: "Allows you to slap a user",
          usage: "[command | user]",
          async execute(client, message, args) {
          //command
          const user = message.mentions.users.first();
          if(!user)
              return message.reply('Упомяните кого-нибудь чтобы ударить!');

          superagent.get('https://nekos.life/api/v2/img/slap')
              .end((err, response) => {
            const lewdembed = new Discord.MessageEmbed()
            .setTitle(message.author.username + " ударил " + user.username)
            .setImage(response.body.url)
            .setColor(`RANDOM`)
            .setDescription((message.author.toString() + " со всей силы ударил " + user.toString()))
            .setFooter(`умер пацанчик...`)
            .setURL(response.body.url);
        message.channel.send(lewdembed);
          })
          }
          };