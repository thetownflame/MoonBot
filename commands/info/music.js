const { PREFIX } = require('../../config.json');
const Discord = require("discord.js")

module.exports = {
  name: "music",
  description: "Get the weather of anywhere",
  category: "info",
  usage: "weathet <>",
  async execute(client, message, args) {
       
      const embed = new Discord.MessageEmbed()
      .setAuthor('Moon Bot |  Команды', 'https://images-ext-2.discordapp.net/external/Z8jSSTkQ8AKxnK6m7qhOIX8nNR9U-FLVkXGv7cXaEEs/https/cdn.discordapp.com/avatars/719664504203640975/bdd04cfdb5bb773e3737f9488ff47ca3.webp', 'https://discord.com/oauth2/authorize?client_id=719664504203640975&scope=bot&permissions=2054351998')
      .setColor("FFFAFA")

      .addField("**Музыка**", "They can also be inline.", false)
      .addField(`${PREFIX}play`, "Начать проигрывание", true)
      .addField(`${PREFIX}loоp`, "Бесконечное воспроизведение одного трека", true)
      .addField(`${PREFIX}lyrics`, "Текст песни", true)
      .addField(`${PREFIX}np`, "Сейчас играет", true)
      .addField(`${PREFIX}pause`, "Пауза", true)
      .addField(`${PREFIX}resume`, "Продолжение проигрывания", true)
      .addField(`${PREFIX}skip`, "Пропуск текущей песни", true)
      .addField(`${PREFIX}stop`, "Окончание воспроизведения", true)

      message.member.send(embed);
      message.reply("**🌠 я отправил весь список music-команд тебе в личные сообщения**");

        }
      }
        