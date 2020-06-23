
const Discord = require("discord.js");
const superagent = require("snekfetch");
const utils = require('../../utils');

        module.exports = {
            name: "cuddle",
          async execute(client, message, args) {

          if(message.guild === null)return;
          const user = message.mentions.users.first();
          if(!user)
              return message.reply('Упомяните кого-нибудь, чтобы прижаться ^-^');

          superagent.get('https://nekos.life/api/v2/img/cuddle')
              .end((err, response) => {
            const lewdembed = new Discord.MessageEmbed()
            .setTitle(message.author.username + " прижался к " + user.username)
            .setImage(response.body.url)
            .setColor(`RANDOM`)
            .setDescription((message.author.toString() + " прижался к " + user.toString()))
            .setURL(response.body.url);
        message.channel.send(lewdembed);
          })

          }
          };