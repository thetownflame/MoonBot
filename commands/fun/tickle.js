
const Discord = require("discord.js");
const superagent = require("snekfetch");
const utils = require('../../utils');

            module.exports = {
                name: "tickle",
                category: "fun",
              description: "Allows you to tickle a user",
              usage: "[command | user]",
              async execute(client, message, args) {
              //command
              const user = message.mentions.users.first();
              if(!user)
                  return message.reply('Упомяните кого-нибудь чтобы пощекотать');
  
              superagent.get('https://nekos.life/api/v2/img/tickle')
                  .end((err, response) => {
                const lewdembed = new Discord.MessageEmbed()
                (message.author.username + " щекочет " + user.username)
                .setImage(response.body.url)
                .setColor(`RANDOM`)
                .setDescription((message.author.toString() + " щекочет " + user.toString()))
                .setFooter(`страшно...`)
                .setURL(response.body.url);
            message.channel.send(lewdembed);
              })
              }
              };