module.exports = {
    name: "clear",
async execute(client, message, args) {
        if (message.deletable) {
            message.delete();
        }
    
        if (!message.member.hasPermission("MANAGE_MESSAGES")) {
            return message.reply("Вы не можете очищать").then(m => m.delete(5000));
        }

        if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
            return message.reply("Я не могу удалить 0< cообщений").then(m => m.delete(5000));
        }

        if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
            return message.reply("Я не имею права удалять сообщения...").then(m => m.delete(5000));
        }

        let deleteAmount;

        if (parseInt(args[0]) > 100) {
            deleteAmount = 100;
        } else {
            deleteAmount = parseInt(args[0]);
        }

        message.channel.bulkDelete(deleteAmount, true)
            .then(deleted => message.channel.send(`Я удалил \`${deleted.size}\` сообщений`))
  
    }
}