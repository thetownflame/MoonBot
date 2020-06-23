const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "mute",
  description: "Mute anyone who break rules",
  category: "moderation",
  usage: "mute <@mention> <reason>",
  async execute(client, message, args) {
    if (!message.member.hasPermission("MANAGE_ROLES")) {
      return message.channel.send(
        "Извините, но у вас нет прав на данную команду"
      );
    }

    if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
      return message.channel.send("У меня нет прав управления ролями");
    }

    const user = message.mentions.members.first();
    
    if(!user) {
      return message.channel.send("Пожалуйста, укажите пользователя, которого хотите замьютить")
    }
    
    if(user.id === message.author.id) {
      return message.channel.send("Я не могу замьютить тебя");
    }
    
    
    let reason = args.slice(1).join(" ")
    
    
    if(!reason) {
      return message.channel.send("Укажите причину мьюта")
    }
    
  //TIME TO LET MUTED ROLE
    
    let muterole = message.guild.roles.cache.find(x => x.name === "Muted")
    
    
      if(!muterole) {
      return message.channel.send("Этот сервер не имеет роли `Muted`")
    }
    
    
   if(user.roles.cache.has(muterole)) {
      return message.channel.send("Этот пользователь уже в мьюте")
    }
    
  
    
    
    user.roles.add(muterole)
    
await message.channel.send(`Вы замьютили **${message.mentions.users.first().username}** за \`${reason}\``)
    
    user.send(`Вы были замьючены на сервере **${message.guild.name}** за \`${reason}\``)
    
    
//WE ARE DONE HERE 
    
  }
};
