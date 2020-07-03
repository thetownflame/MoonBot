const ytdlDiscord = require("ytdl-core-discord");
const Discord = require("discord.js")

module.exports = {
  async play(song, message) {
    const queue = message.client.queue.get(message.guild.id);
    
    if(!song) {
      queue.channel.leave();
      message.client.queue.delete(message.guild.id)

      const musend = new Discord.MessageEmbed()
      .setDescription(`**Проигрывание музыки завершено**`)
      .setColor(`FFFFCC`)
      
      return queue.textChannel.send(musend).catch(console.error)
    }
    
    try {
      var stream = await ytdlDiscord(song.url, {
        highWaterMark: 1 << 25,
      });
      
    } catch (error) {
      if(queue) {
        queue.songs.shift()
        module.exports.play(queue.songs[0], message)
      }
      
    }
    
    const dispatcher = queue.connection
    .play(stream, {type: "opus"}).on("finish", () => {
      if(queue.loop) {
        let lastsong = queue.songs.shift()
        queue.songs.push(lastsong)
        module.exports.play(queue.songs[0], message)
      } else {
        queue.songs.shift()
        module.exports.play(queue.songs[0], message)
      }
    }).on("error", console.error)
    dispatcher.setVolumeLogarithmic(queue.volume / 100); 
    
    const music = new Discord.MessageEmbed()
    .setDescription(`**Начинаю проигрывать** - [${song.title}](${song.url})`)
    .setImage(`https://cdn.discordapp.com/attachments/704246613249359882/728693423682355241/Annonces.gif`)
    .setFooter('Музыкальная часть бота использует поиск по YouTube', 'https://cdn.jim-nielsen.com/macos/512/music-2019-09-25.png')
    .setColor(`FFFFCC`)
    
    
      queue.textChannel.send(music)
    
    
  }
}
