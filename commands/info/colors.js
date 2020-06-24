const Discord = require('discord.js');
const AlexAPI = require('alexflipnote.js')
const AlexClient = new AlexAPI()

module.exports = {
  name: "colors",
async execute(client, message, args) {

  if(!args[0] || args[0] === 'help') return message.reply("Укажите цвет в Hex #")
  var isOk = /^[0-9A-F]{6}$/i.test(args[0])
  if (isOk === false) return message.reply("Укажите цвет в Hex #")
  
  let body = await AlexClient.others.color(args[0])
  
  const embed = new Discord.MessageEmbed()
  .setColor("#ff9900")
  .setTitle(body.name)
  .setDescription("Hex: " + body.hex + '\n' + "RGB: " + body.rgb)
  .setImage(body.image) 
  message.channel.send({embed});
  }
}