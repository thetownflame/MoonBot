const { MessageEmbed, version } = require("discord.js")
const utils = require('../../utils');
const moment = require("moment");
const m = require("moment-duration-format");
let os = require('os')
let cpuStat = require("cpu-stat")
const ms = require("ms")
const { PREFIX } = require('../../config.json');


module.exports = {
    name: "stats",
  async execute(client, message, args) {
    
      const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");      
      const core = os.cpus()[0];
      const embedStats = new MessageEmbed()

        .setAuthor('Moonlight |  Статистика', 'https://cdn2.iconfinder.com/data/icons/mobile-device/512/bank-data-storage-info-blue-round-512.png', 'https://discord.com/oauth2/authorize?client_id=719664504203640975&scope=bot&permissions=2054351998')
        .setColor("FFFAFA")     
        .setThumbnail('https://i.imgur.com/bZpAz25.gif')
        .addField('Статистика', [
 
            `<:QuestionsWut:726481237765521438> Префикс: **${PREFIX}**`,
            `<:kei:726481258489839676> Юзеры: ${client.users.cache.size}`,
            `<:7498_SentaoDePana:726488362675863562> Сервера бота: ${client.guilds.cache.size}`,
            `-------------------------------------`,
            `<:jsdiscordbotlogonodejsa:726481244652699782> Версия Node.JS: ${process.version}`,
            `<:Mamako_pout:726481255050510447> Discord.js: v${version}`,
            `<:Emilia_What:726481252734992426> Платформа: ${process.platform}`,
            `<:ShiinaPeek:726481254798852097> Процессор: ${core.model}`,
            `<:KaguyaBlush:726481252957290506> Использование ОЗУ: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} Мб` ,
            `-------------------------------------`,
            `<:heroku:726489186089173093> Хостинг - [Heroku™](https://www.heroku.com/home)`,
            '\u200b'

        ])
        
        .addField("Разработчики", `<:discord_bot_dev:726481238264643645> ricochan#9999`,)
        .addField("Полезная информация", " [Сервер поддержки](https://discord.gg/93wFswg) | [Инвайт бота](https://discord.com/oauth2/authorize?client_id=719664504203640975&scope=bot&permissions=2054351998)")

      message.channel.send(embedStats)
  }
}