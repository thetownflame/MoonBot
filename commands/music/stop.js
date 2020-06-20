const discord = require("discord.js");

module.exports = {
  name: "stop",
  description: "Stop the music",
  execute(client, message, args) {
    const { channel } = message.member.voice;
    if (!channel) {

      return message.channel.send("Вы должны быть в голосовом канале");
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      return message.channel.send("Здесь ничего не играет...");
    }

    serverQueue.songs = [];
    serverQueue.connection.dispatcher.end();

    serverQueue.textChannel.send("**Проигрывание остановлено**");
  }
};
