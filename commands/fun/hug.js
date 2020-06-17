const utils = require('../../utils');

const Discord = require("discord.js");
const superagent = require("snekfetch");
     
        module.exports = {
            name: "hug",
            category: "fun",
          description: "Allows you to hug another user",
          usage: "[command | user]",
          async execute(client, message, args) {
          //command
          const user = message.mentions.users.first();
          if(!user)
              return message.reply('Упомяните кого-нибудь чтобы обнять');

          superagent.get('https://nekos.life/api/v2/img/hug')
              .end((err, response) => {
            const lewdembed = new Discord.MessageEmbed()
            .setTitle(message.author.username + " обнял " + user.username)
            .setImage(response.body.url)
            .setColor(`RANDOM`)
            .setDescription((message.author.toString() + " обнял " + user.toString()))
            .setFooter(`это очень мило ^-^`)
            .setURL(response.body.url);
        message.channel.send(lewdembed);
          })
          }
          };