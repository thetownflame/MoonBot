module.exports = {
  name: "unmute",
  category: "moderation",
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

    if (!user) {
      return message.channel.send(
        "Пожалуйста, укажите пользователя, которого хотите замьютит"
      );
    }
    
    let muterole = message.guild.roles.cache.find(x => x.name === "Muted")
    
    
 if(user.roles.cache.has(muterole)) {
      return message.channel.send("Данный пользователь не замьючен")
    }
    
    
    user.roles.remove(muterole)
    
    await message.channel.send(`**${message.mentions.users.first().username}** размьючен`)
    
    user.send(`Вы были размьючены на сервере **${message.guild.name}**`)

  }
};
