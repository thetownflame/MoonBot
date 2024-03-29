module.exports = {
  name: "queue",
  description: "get list of added songs",
  execute: (client, message, args) => {
    const { channel } = message.member.voice;
    if (!channel) {

      return message.channel.send("Вы должны быть в голосовом");
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      return message.channel.send("Здесь ничего не играет...");
    }

    message.channel.send(
      `${serverQueue.songs
        .map((song, index) => index + 1 + ". " + song.title)
        .join("\n\n")}`,
      { split: true }
    );
  }
};
