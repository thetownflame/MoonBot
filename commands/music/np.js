module.exports = {
  name: "np",
  description: "send the name of on going song",
  execute (client, message, args) {
    
      const { channel } = message.member.voice;
    if (!channel) {

      return message.channel.send("Вы должны быть в голосовом канале");
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      return message.channel.send("Здесь ничего не играет...");
    }
    
    message.channel.send(serverQueue.songs[0].title)

    
    
    
  }
}
