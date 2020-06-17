const Discord = require("discord.js")
const utils = require('../../utils');

const { version } = require("discord.js");
const moment = require("moment");
const m = require("moment-duration-format");
let os = require('os')
let cpuStat = require("cpu-stat")
const ms = require("ms")




module.exports = {
    name: "botinfo",
    category: "utility",
  description: "Sends detailed info about the client",
  usage: "[command]",
  async execute(client, message, args) {
  //command
  let cpuLol;
  cpuStat.usagePercent(function(err, percent, seconds) {
      if (err) {
          return console.log(err);
      }
      const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
      const embedStats = new Discord.MessageEmbed()
        .setAuthor('Moon Bot |  Обо мне', 'https://images-ext-2.discordapp.net/external/Z8jSSTkQ8AKxnK6m7qhOIX8nNR9U-FLVkXGv7cXaEEs/https/cdn.discordapp.com/avatars/719664504203640975/bdd04cfdb5bb773e3737f9488ff47ca3.webp', 'https://discord.com/oauth2/authorize?client_id=719664504203640975&scope=bot&permissions=2054351998')
        .setColor("FFFAFA")
        .addField("**ᅠᅠᅠᅠᅠᅠCистемная информация**", "ᅠ", false)
        .addField("Испоьзование ОЗУ", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`, true)
        .addField("Версия Node", `${process.version}`, true)        
        .addField("Процессор", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
        .addField("Загрузка процессора", `\`${percent.toFixed(2)}%\``, true)

        .addField("**ᅠᅠᅠᅠᅠᅠᅠᅠСтатистика**", "ᅠ", false)  

        .addField("Использующие бота", `${client.users.cache.size}`, true)
        .addField("Сервера бота", `${client.guilds.cache.size}`, true)
        .addField("Каналы*", `${client.channels.cache.size}`, true)

        .addField("**ᅠᅠᅠᅠᅠᅠᅠᅠИнформация**", "ᅠ", false)  
        .addField("Разработчики", "**ricochan#9999**", true)
        .addField("Сервер поддержки", '[Ткни меня ^-^](https://discord.gg/93wFswg)', true)


        .setThumbnail(message.guild.iconURL())
      message.channel.send(embedStats)
  });
  }
  };