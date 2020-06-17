const utils = require('../../utils');

const Discord = require("discord.js");
const superagent = require("snekfetch");

        module.exports = {
            name: "kiss",
            category: "fun",
          description: "Allows you to kiss another user",
          usage: "[command | user]",
          async execute(client, message, args) {
          //command
          const user = message.mentions.users.first();
          if(!user)
              return message.reply('Mention someone to kiss');

          superagent.get('https://nekos.life/api/v2/img/kiss')
              .end((err, response) => {
            const lewdembed = new Discord.MessageEmbed()
            .setTitle(message.author.username + " поцеловал " + user.username)
            .setImage(response.body.url)
            .setColor(`RANDOM`)
            .setDescription((message.author.toString() + " поцеловал " + user.toString()))
            .setFooter(`это очень мило ^-^`)
            .setURL(response.body.url);
        message.channel.send(lewdembed);
          })
          }
          };