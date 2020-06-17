const weather = require('weather-js');
const discord = require('discord.js')


//TIME TO END STREAM
module.exports = {
  name: "weather",
  description: "Get the weather of anywhere",
  category: "info",
  usage: "weathet <>",
  async execute(client, message, args) {
    
    
    if(!args.length) {
      return message.channel.send("Пожалуйста, введите локацию")
    }
    
 weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
try {
 
let embed = new discord.MessageEmbed()
.setTitle(`Погода - ${result[0].location.name}`)
.setColor("#ff2050")
.setDescription("Температуры могут отличаться")
.addField("Температура", `${result[0].current.temperature} Celcius`, true)
.addField("Небо", result[0].current.skytext, true)
.addField("Влажность", result[0].current.humidity, true)
.addField("Скорость ветра", result[0].current.windspeed, true)//What about image
.addField("Время обновления", result[0].current.observationtime, true)
.addField("Ветер", result[0].current.winddisplay, true)
.setThumbnail(result[0].current.imageUrl);
   message.channel.send(embed)
} catch(err) {
  return message.channel.send("Unable To Get the data of Given location")
}
});   

    
  }
}