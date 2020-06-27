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
 
            `<:QuestionsWut:726481237765521438> Префикс: ${PREFIX}`,
            `<:kei:726481258489839676> Юзеры: ${client.users.cache.size}`,
            `<a:good:725448779087609937> Сервера бота: ${client.guilds.cache.size}`,
            `<:jsdiscordbotlogonodejsa:726481244652699782> Версия Node.JS: ${process.version}`,
            `<:Emilia_What:726481252734992426> Платформа: ${process.platform}`,
            `<:ChikaSmug:726481245885956158> Процессор: ${core.model}`,
            `<:KaguyaBlush:726481252957290506> ОЗУ: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} | ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`,
            `<a:pikachuchair:723502086603407461> Uptime: ${ms(os.uptime() *1000, { long:false})}`,
            `<:discord_bot_dev:726481238264643645> Разработчик: ricochan#9999`,

            '\u200b'

        ])

        .addField("Полезная информация", " [Сервер поддержки](https://discord.gg/93wFswg) | [Инвайт бота](https://discord.com/oauth2/authorize?client_id=719664504203640975&scope=bot&permissions=2054351998)")

      message.channel.send(embedStats)
  });
  }
  };