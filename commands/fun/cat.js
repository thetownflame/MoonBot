const superagent = require("snekfetch");
const Discord = require('discord.js')


module.exports = {
  name: "cat",
  
execute(client, message, args, level) {

superagent.get('https://nekos.life/api/v2/img/meow')
    .end((err, response) => {
  const lewdembed = new Discord.MessageEmbed()
  .setTitle("Random cat")
  .setImage(response.body.url)
  .setColor(`FFFFCC`)
  .setURL(response.body.url);
  
message.channel.send(lewdembed);
})
}
};