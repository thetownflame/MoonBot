const Discord = require("discord.js");
const utils = require('../../utils');

module.exports = {
  name: "server",
  category: "utility",
description: "Shows info about a server",
usage: "[command]",
async execute(client, message, args) {

  var emojis;
    if (message.guild.emojis.cache.size === 0) {
        emojis = 'None';
    } else {
        emojis = message.guild.emojis.cache.size;
    }


let servericon = message.guild.iconURL;
let serverembed = new Discord.MessageEmbed()

  .setTitle("Информация о сервере "  + message.guild.name)
  .setColor("FF9999")
  .setThumbnail(servericon)

  .addFields(
    { name: `<:l12:725447256433623099> Пользователи `, value: message.guild.members.cache.filter(mem => mem.user.bot === false).size, inline: true },
		{ name: `<:123:725447218500468796> Боты`, value: message.guild.members.cache.filter(mem => mem.user.bot === true).size, inline: true },
    { name: `<:pls:725447218693406750> Онлайн`, value: message.guild.members.cache.filter(mem => mem.presence.status != "offline").size, inline: true })
  
  .addField(`<:smug:725447218319982682> Каналы`, message.guild.channels.cache.size, true)
  .addField(`<:vsmug:725447256047878156> Владелец`, `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`, true)
  .addField(`<:hmmm:725448780144443542> Дата создания`, message.guild.createdAt)
  .addField(`<a:good:725448779087609937> Тайм-аут AFK`, message.guild.afkTimeout / 60 + ' minutes', true)
  .addField(`<a:pin:725447218982551603> Эмоджи`, `${emojis}/100`, true)
  .addField(`<a:satanilaugh:723503324984246315> Дата вступления`, message.member.joinedAt)

.setThumbnail(message.guild.iconURL())
.setTimestamp()
.setFooter(message.author.username, message.author.avatarURL);
message.channel.send(serverembed);
}
};