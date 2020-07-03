const weather = require('weather-js');
const Discord = require('discord.js')

module.exports = {
  name: "weather",
  async execute(client, message, args) {
    
    
    if(!args.length) {
      const embede1 = new Discord.MessageEmbed()
      .setAuthor('Возникла ошибка!', 'https://cdn2.iconfinder.com/data/icons/mix-color-5/100/Mix_color_5__info-512.png')
      .setDescription(`Введите локацию для запроса информации о погоде`)
      .setColor(`FFFFCC`)
      return message.channel.send(embede1)
    }
    
 weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
try {
 
let embed = new Discord.MessageEmbed()
.setAuthor(`Погода в ${result[0].location.name} `, 'https://images-eu.ssl-images-amazon.com/images/I/61nuuPxUvaL.png')
.setColor("#ff2050")
.setDescription("Температуры могут отличаться")
.addField("Температура", `${result[0].current.temperature} Celcius`, true)
.addField("Небо", result[0].current.skytext, true)
.addField("Влажность", result[0].current.humidity, true)
.addField("Скорость ветра", result[0].current.windspeed, true)
.addField("Время обновления", result[0].current.observationtime, true)
.addField("Ветер", result[0].current.winddisplay, true)
.setThumbnail(result[0].current.imageUrl);
   message.channel.send(embed)
} catch(err) {

  const embede = new Discord.MessageEmbed()
  .setAuthor('Возникла ошибка!', 'https://cdn2.iconfinder.com/data/icons/mix-color-5/100/Mix_color_5__info-512.png')
  .setDescription(`Попробуйте ввести название своего города на английском языке`)
  .setColor(`FFFFCC`)
  
  return message.channel.send(embede)
}
});   

    
  }
}