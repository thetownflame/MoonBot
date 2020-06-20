const Discord = require("discord.js");
const utils = require('../../utils');

module.exports = {
  name: "server",
  category: "utility",
description: "Shows info about a server",
usage: "[command]",
async execute(client, message, args) {


const serverLevel = ["None", "Low", "Medium", "High", "Max"];
let servericon = message.guild.iconURL;
let serverembed = new Discord.MessageEmbed()

  .setTitle("Информация о сервере "  + message.guild.name)
  .setColor("FF9999")
  .setThumbnail(servericon)

  .addFields(
    { name: `😺 Пользователи `, value: message.guild.members.cache.filter(mem => mem.user.bot === false).size, inline: true },
		{ name: "🤖 Боты", value: message.guild.members.cache.filter(mem => mem.user.bot === true).size, inline: true },
    { name: "💚 Онлайн", value: message.guild.members.cache.filter(mem => mem.presence.status != "offline").size, inline: true })
  
  .addField("🍡 Каналы", message.guild.channels.cache.size, true)
  .addField(`💖 Владелец`, `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`, true)
  .addField("🐬 Дата создания", message.guild.createdAt)
  .addField("🍒 Дата вступления", message.member.joinedAt)

.setThumbnail(message.guild.iconURL())
.setTimestamp()
.setFooter(message.author.username, message.author.avatarURL);
message.channel.send(serverembed);
}
};