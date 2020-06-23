const Discord = require('discord.js')
const osu = require('node-osu');
const api = new osu.Api("ed164d6b667f4a34b825a00d24ad9c5a42bd7fee" , {
    notFoundAsError: true,
    completeScores: false 
})

module.exports = {
  name: "osu",
  category: "utility",
description: "Get information about a user",
usage: "[command | user] or [command]",
async execute(client, message, args) {

  

{

  let username = args[0]
  if (!args[0]) return message.channel.send('Please, provide a valid user\'s nickname! (osu!)')


api.getUser({u: username})
  .then((user) => {

  const embed = new Discord.MessageEmbed()
  .setThumbnail(`http://s.ppy.sh/a/${user.id}}`)
  .setColor("#D0436A")
  .addField('Никнейм', user.name, true)
  .addField('PP', Math.round(user.pp.raw), true)
  .addField('Rank', user.pp.rank, true)
  .addField('Level', Math.round(user.level), true)
  .addField('Country', user.country, true)
  .addField('Country Rank', user.pp.countryRank, true)
  .addField('Playcount', user.counts.plays, true)
  .addField('Accuracy', `${user.accuracyFormatted}`, true)
  .setFooter('Запросил ' + message.author.tag, message.author.avatarURL)
  message.channel.send(embed);

})
}
}
} 