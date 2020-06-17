    const Discord = require("discord.js")
    const utils = require('../../utils');


    module.exports = {
        name: "userinfo",
        category: "utility",
    description: "Get information about a user",
    usage: "[command | user] or [command]",
    async execute(client, message, args) {

    
{
    const user = message.mentions.users.first();
    if(!user)
        return message.reply('пожалуйста, упомяните пользователя, о котором вы хотите получить информацию.');
    
    var playing = (user.presence.activities)
    
    const ihatekids = new Discord.MessageEmbed()
          .setTitle(`Информация о ${message.author.username}`) 
          .addField("Полный никнейм", `${user.tag}`) 
          .addField("ID", user.id)
          .addField("Играет в",playing, true)
          .addField("Статус", `${user.presence.status}`, true)
          .addField("Регистрация в дискорде", user.createdAt)
          .setColor("RANDOM")
          .setTimestamp()
          .setThumbnail(user.avatarURL())  
      message.channel.send(ihatekids)

    };
    }
       
    
    };