module.exports = {
  name: "pause",
  description: "pause the song",
  execute (client, message, args) {
  const { channel } = message.member.voice;
    if (!channel) {

      return message.channel.send("Вы должны быть в голосовом канале");
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      return message.channel.send("Здесь ничего не играет...");
    }
    
    if(serverQueue && serverQueue.playing) {
      serverQueue.playing = false;
      serverQueue.connection.dispatcher.pause(true)
      
      
      return message.channel.send("✅ | Музыка на паузе")
  }  
  }
}
