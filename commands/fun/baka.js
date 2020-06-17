const superagent = require("snekfetch");
const Discord = require('discord.js')

module.exports = {
  name: "baka",
  category: "fun",
description: "Converts text info ASCII",
usage: "[command | your text]",
async execute(client, message, args) {
    if (!message.channel.nsfw) return message.channel.send('Эту команду можно использовать только в NSFW!')
    superagent.get('https://nekos.life/api/v2/img/baka')
        .end((err, response) => {
      const lewdembed = new Discord.MessageEmbed()
      .setTitle("Дурак!!!")
      .setImage(response.body.url)
      .setColor(`#000000`)
      .setFooter(`идиот!`)
      .setURL(response.body.url);
  message.channel.send(lewdembed);
    })
	
}
};
