const { MessageEmbed, version: djsversion } = require("discord.js")
const utils = require('../../utils');
const { version } = require("discord.js");
const moment = require("moment");
const m = require("moment-duration-format");
let os = require('os')
let cpuStat = require("cpu-stat")
const ms = require("ms")
const { PREFIX } = require('../../config.json');


module.exports = {
    name: "stats",
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
      const core = os.cpus()[0];
      const embedStats = new MessageEmbed()

        .setAuthor('Moon Bot |  Статистика', 'https://www.pngkit.com/png/detail/231-2316751_database-database-icon-png.png', 'https://discord.com/oauth2/authorize?client_id=719664504203640975&scope=bot&permissions=2054351998')
        .setColor("FFFAFA")     
        .setThumbnail(message.guild.iconURL())
        .addField('Статистика', [
 
            `<a:kannaoof:723501765114462228> Префикс: ${PREFIX}`,
            `<a:tailwag:723503331984670771> Юзеры: ${client.users.cache.size}`,
            `<a:partycat:723503338263412757> Сервера бота: ${client.guilds.cache.size}`,
            `<:89894960_jsdiscordbotlogonodejsa:724748652249088210> Версия Node.JS: ${process.version}`,
            `<a:dog_hammer:723500976354623528> Платформа: ${process.platform}`,
            `<:seks:715834287504752640>  Процессор: ${core.model}`,
            `<:cutecat:717766053807128646> ОЗУ: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} | ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`,
            `<a:pikachuchair:723502086603407461> Uptime: ${ms(os.uptime() *1000, { long:true})}`,
            `<:4228_discord_bot_dev:724748499593461912> Разработчик: ricochan#9999`,

            '\u200b'

        ])

        .addField("Полезная информация", " [Сервер поддержки](https://discord.gg/93wFswg) | [Инвайт бота](https://discord.com/oauth2/authorize?client_id=719664504203640975&scope=bot&permissions=2054351998)")

      message.channel.send(embedStats)
  });
  }
  };