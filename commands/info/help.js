const { PREFIX } = require('../../config.json');
const Discord = require("discord.js");

module.exports = {
  name: "help",
  description: "Get the weather of anywhere",
  category: "info",
  usage: "weathet <>",
  async execute(client, message, args) {

      const embed = new Discord.MessageEmbed()
      .setAuthor('Moonlight |  Команды', 'https://images-ext-2.discordapp.net/external/Z8jSSTkQ8AKxnK6m7qhOIX8nNR9U-FLVkXGv7cXaEEs/https/cdn.discordapp.com/avatars/719664504203640975/bdd04cfdb5bb773e3737f9488ff47ca3.webp', 'https://discord.com/oauth2/authorize?client_id=719664504203640975&scope=bot&permissions=2054351998')
      .setColor("FBFF00")
      .setDescription(`Это весь список доступных мне команд\nПрефикс бота: ${PREFIX}`)
      .addField(`Fun commands:`, " ``8ball``, ``cat``, ``cuddle``, ``dice``, ``dog``, ``flip``\n``hug``, ``kiss``, ``pat``, ``poke``, ``slap``, ``tickle``")
      .addField(`Music commands:`, " ``play``, ``pause``, ``resume``, ``skip``, ``stop``, ``loop``")
      .addField(`Help commands:`, " ``animesearch``, ``avatar``, ``calc``, ``invite``, ``osu``, ``server``, ``user``, ``weather``, ``steam``")
      .addField(`Moderation commands:`, " ``ban``, ``kick``")


      message.channel.send(embed);


        }
      }