const superagent = require("snekfetch");
const Discord = require('discord.js')
const utils = require('../../utils');



module.exports = {
  name: "dog",
  category: "fun",
description: "Sends a random dog image",
usage: "[command]",
async execute(client, message, args) {

superagent.get('https://nekos.life/api/v2/img/woof')
    .end((err, response) => {
  const lewdembed = new Discord.MessageEmbed()
  .setTitle("Random dog")
  .setImage(response.body.url)
  .setColor(`FFFFCC`)
  .setURL(response.body.url);
message.channel.send(lewdembed);
})
}
};