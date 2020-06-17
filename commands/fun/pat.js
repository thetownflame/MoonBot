
const Discord = require("discord.js");
const superagent = require("snekfetch");
const utils = require('../../utils');


        module.exports = {
            name: "pat",
            category: "fun",
          description: "Allows you to pat another user",
          usage: "[command | user]",
          async execute(client, message, args)  {
          //command
          const user = message.mentions.users.first();
          if(!user)
              return message.reply('Упомяните кого-нибудь чтобы погладить');

          superagent.get('https://nekos.life/api/v2/img/pat')
              .end((err, response) => {
            const lewdembed = new Discord.MessageEmbed()
            .setTitle(message.author.username + " погладил " + user.username)
            .setImage(response.body.url)
            .setColor(`RANDOM`)
            .setDescription((message.author.toString() + " погладил " + user.toString()))
            .setFooter(`это очень мило оWo`)
            .setURL(response.body.url);
        message.channel.send(lewdembed);
          })
        

          }
          };