const { PREFIX } = require('../../config.json');
const Discord = require("discord.js")

module.exports = {
  name: "fun",
  description: "Get the weather of anywhere",
  category: "info",
  usage: "weathet <>",
  async execute(client, message, args) {
       
      const embed = new Discord.MessageEmbed()
      .setAuthor('Moon Bot |  Команды', 'https://images-ext-2.discordapp.net/external/Z8jSSTkQ8AKxnK6m7qhOIX8nNR9U-FLVkXGv7cXaEEs/https/cdn.discordapp.com/avatars/719664504203640975/bdd04cfdb5bb773e3737f9488ff47ca3.webp', 'https://discord.com/oauth2/authorize?client_id=719664504203640975&scope=bot&permissions=2054351998')
      .setColor("FFFAFA")


      .addField("**Весёлое**", " ᅠ", false)

      .addField(`${PREFIX}8ball`, "Рандом-шар", true)
      .addField(`${PREFIX}advice`, "Советы", true)
      .addField(`${PREFIX}cat`, "Котики ^-^", true)
      .addField(`${PREFIX}cuddle`, "Прижаться к участнику", true)
      .addField(`${PREFIX}dice`, "Бросить кости", true)
      .addField(`${PREFIX}dog`, "Собачки ^-^", true)
      .addField(`${PREFIX}fact`, "Интересные факты", true)
      .addField(`${PREFIX}flip`, "Подбросить монетку", true)
      .addField(`${PREFIX}hug`, "Обнять другого участника", true)
      .addField(`${PREFIX}kiss`, "Поцеловать другого участника", true)
      .addField(`${PREFIX}love`, "Проверить, насколько тебя любят", true)
      .addField(`${PREFIX}meme`, "Мемы...", true)
      .addField(`${PREFIX}pat`, "Погладить другого участника", true)
      .addField(`${PREFIX}poke`, "Ткнуть другого участника", true)
      .addField(`${PREFIX}slap`, "Шлёпнуть другого участника", true)
      .addField(`${PREFIX}slots`, "Казино 777.", true)
      .addField(`${PREFIX}tickle`, "Пощекотать другого участника", true)
      .addField(`${PREFIX}waifu`, "Твоя вайфу:3", true)
      
  
     
      message.member.send(embed);
      message.reply("**🌠 я отправил весь список fun-команд тебе в личные сообщения**");

        }
      }
        