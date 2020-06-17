const Discord = require("discord.js");
const utils = require('../../utils');

module.exports = {
  name: "serverinfo",
  category: "utility",
description: "Shows info about a server",
usage: "[command]",
async execute(client, message, args) {
//command
let servericon = message.guild.iconURL;
let serverembed = new Discord.MessageEmbed()
.setTitle("Информация о сервере")
  .setColor("FF9999")
  .setThumbnail(servericon)
  .addField("Имя сервера 🌠", message.guild.name)
  .addField("Владелец 🔮", `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`, true)
  .addField("Каналы 🍇", message.guild.channels.cache.size, true)
  .addField("Роли ✨", message.guild.roles.cache.size, true)
  .addField("Создан 💥", message.guild.createdAt)
  .addField("Вы вступили ⭐", message.member.joinedAt)
  .addField("Всего пользователей 🎉", message.guild.memberCount)
  .setThumbnail(message.guild.iconURL())
.setTimestamp()
.setFooter(message.author.username, message.author.avatarURL);
message.channel.send(serverembed);
}
};