const Discord = require("discord.js");

module.exports = {
  name: "loop",
  description: "бесконечное проигрывание всех песен, находящихся в очереди",
  execute (client, message, args) {
    
    const { channel } = message.member.voice;
    if (!channel) {

      return message.channel.send("Вы должны быть в голосовом канале");
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      return message.channel.send("Здесь ничего не играет...");
    }
    

    serverQueue.loop = !serverQueue.loop
    
    const lewdembed = new Discord.MessageEmbed()
    .setTitle(`Повтор сейчас - **${serverQueue.loop ? "включен" : "отключен"}**`)
    .setColor(`FBFF00`)

    message.channel.send(lewdembed);
  }
}