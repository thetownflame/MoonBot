const { PREFIX } = require('../../config.json');
const Discord = require("discord.js");

module.exports = {
  name: "help",
  description: "Get the weather of anywhere",
  category: "info",
  usage: "weathet <>",
  async execute(client, message, args) {

      const embed = new Discord.MessageEmbed()
      .setAuthor('Moonlight |  Команды', 'https://images-ext-2.discordapp.net/external/TkFBlaEeVGw6OJednU0-LGGjUInZz04xvGB2w-f06PE/https/cdn.discordapp.com/avatars/719664504203640975/e55288a0d1ac54c31fbcaa8e4ff92f1a.webp', 'https://discord.com/oauth2/authorize?client_id=719664504203640975&scope=bot&permissions=2054351998')
      .setColor("FFFFCC")
      .setDescription(`<:kannawave:723501163001151569> Все доступные команды\nПрефикс бота: ${PREFIX}`)
      .addField(`**Fun commands**`, " ``8ball``, ``cat``, ``cuddle``, ``dice``, ``dog``, ``flip``\n``hug``, ``kiss``, ``pat``, ``poke``, ``slap``, ``tickle``")
      .addField(`**Music commands**`, " ``play``, ``pause``, ``resume``, ``skip``, ``stop``, ``loop``")
      .addField(`**Game commands**`, " ``osu``, ``steam``")
      .addField(`**Info commands**`, " ``animesearch``, ``avatar``, ``calc``, ``invite``,``server``, ``user``, ``weather``, ``stats``")
      .addField(`**Moderation commands**`, " ``ban``, ``kick``, ``clear``, ``mute``, ``unmute``")

      message.channel.send(embed);


        }
      }