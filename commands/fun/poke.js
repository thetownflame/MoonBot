
const Discord = require("discord.js");
const superagent = require("snekfetch");
const utils = require('../../utils');


        module.exports = {
            name: "poke",
            category: "fun",
          description: "Allows you to poke a user",
          usage: "[command | user]",
          async execute(client, message, args) {
          //command
          const user = message.mentions.users.first();
          if(!user)
              return message.reply('Упомяните кого-нибудь чтобы ткнуть его ||oWo|| ');

          superagent.get('https://nekos.life/api/v2/img/poke')
              .end((err, response) => {
            const lewdembed = new Discord.MessageEmbed()
            .setTitle(message.author.username + " ткнул " + user.username)
            .setImage(response.body.url)
            .setColor(`RANDOM`)
            .setDescription((message.author.toString() + " ткнул " + user.toString()))
            .setFooter(`умер...`)
            .setURL(response.body.url);
        message.channel.send(lewdembed);
          })
          }
          };