const { PREFIX } = require('../../config.json');
const Discord = require("discord.js")

module.exports = {
  name: "utility",
  description: "Get the weather of anywhere",
  category: "info",
  usage: "weathet <>",
  async execute(client, message, args) {
       
      const embed = new Discord.MessageEmbed()
      .setAuthor('Moon Bot |  Команды', 'https://images-ext-2.discordapp.net/external/Z8jSSTkQ8AKxnK6m7qhOIX8nNR9U-FLVkXGv7cXaEEs/https/cdn.discordapp.com/avatars/719664504203640975/bdd04cfdb5bb773e3737f9488ff47ca3.webp', 'https://discord.com/oauth2/authorize?client_id=719664504203640975&scope=bot&permissions=2054351998')
      .setColor("FFFAFA")


      .addField("**Утилиты**", "ᅠ", false)

      .addField(`${PREFIX}role`, "Инфо о роли", true)
      .addField(`${PREFIX}weather`, "Погода по запросу", true)
      .addField(`${PREFIX}help`, "Все команды бота", true)
      .addField(`${PREFIX}osu`, "Инфо о осу-игроке", true)
      .addField(`${PREFIX}calc`, "Калькулятор", true)
      .addField(`${PREFIX}invite`, "Инвайт бота", true)
      .addField(`${PREFIX}animesearch`, "Поиск аниме по названию", true)
      .addField(`${PREFIX}avatar`, "Аватар участника", true)
      .addField(`${PREFIX}botinfo`, "Инфо о боте", true)
      .addField(`${PREFIX}serverinfo`, "Инфо о сервере", true)
      .addField(`${PREFIX}userinfo`, "Инфо о пользователе", true)


     
      message.member.send(embed);
      message.reply("**🌠 я отправил весь список utility-команд тебе в личные сообщения**");

        }
      }
        