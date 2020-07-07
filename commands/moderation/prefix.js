const db = require("quick.db")
const { PREFIX } = require("../../config.json")
const Discord = require("discord.js")


module.exports = {
  name: "prefix",
  category: "moderation",
  usage: "prefix <new-prefix>",
  description: "Change the guild prefix",
async execute(client, message, args) {


    if(!message.member.hasPermission("ADMINISTRATOR")) {

      const embederr = new Discord.MessageEmbed()
      .setAuthor('Возникла ошибка!', 'https://cdn2.iconfinder.com/data/icons/mix-color-5/100/Mix_color_5__info-512.png')
      .setDescription("У вас недостаточно прав для выполнения данной команды, требуются права: `администратор` ")
      .setColor(`FFFFCC`)

      return message.channel.send(embederr)

    }

    if(!args[0]) {

      const embederr = new Discord.MessageEmbed()
      .setAuthor('Возникла ошибка!', 'https://cdn2.iconfinder.com/data/icons/mix-color-5/100/Mix_color_5__info-512.png')
      .setDescription("Пожалуйста укажите префикс, который вы хотите установить")
      .setColor(`FFFFCC`)

      return message.channel.send(embederr)

    }

    if(args[1]) {

      const embederr = new Discord.MessageEmbed()
      .setAuthor('Возникла ошибка!', 'https://cdn2.iconfinder.com/data/icons/mix-color-5/100/Mix_color_5__info-512.png')
      .setDescription("Вы не можете установить в префикс в качестве двойного аргумента")
      .setColor(`FFFFCC`)

      return message.channel.send(embederr)
    }

    if(args[0].length > 3) {

      const embederr = new Discord.MessageEmbed()
      .setAuthor('Возникла ошибка!', 'https://cdn2.iconfinder.com/data/icons/mix-color-5/100/Mix_color_5__info-512.png')
      .setDescription("Префикс не должен содержать более 4 знаков")
      .setColor(`FFFFCC`)

      return message.channel.send(embederr)
    }

    if(args.join("") === PREFIX) {
      db.delete(`prefix_${message.guild.id}`)

      const embed = new Discord.MessageEmbed()
      .setAuthor('Префикс успешно восстановлен', 'https://cdn1.iconfinder.com/data/icons/color-bold-style/21/34-512.png')
      .setColor(`FFFFCC`)

     return await message.channel.send(embed)

    }

    db.set(`prefix_${message.guild.id}`, args[0])

    const embedyes = new Discord.MessageEmbed()
    .setAuthor('Префикс успешно установлен', 'https://cdn1.iconfinder.com/data/icons/rounded-set-5/48/symbol-forbidden-512.png')
    .setDescription("Новый префикс на сервере " + message.guild.name + ` - ${args[0]}`)
    .setColor(`FFFFCC`)

  await message.channel.send(embedyes)

   }
 }
