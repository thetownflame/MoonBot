const Discord = require("discord.js");
const { stripIndents } = require("common-tags");
const { promptMessage } = require("../../functions.js");


module.exports = {
	name: "ban",
	category: "moderation",
  description: "блокиров-очка",
  async execute(client, message, args) {
        

        if (!args[0]) {
            return message.reply("Пожалуйста, укажите причину бана")
                .then(m => m.delete(5000));
        }

        if (!args[1]) {
            return message.reply("Пожалуйста, укажите причину бана")
                .then(m => m.delete(5000));
        }

        if (!message.member.hasPermission("BAN_MEMBERS")) {
            return message.reply("❌ Вы не имеете прав для блокировки пользователей.")
                .then(m => m.delete(5000));
        
        }


        if (!message.guild.me.hasPermission("BAN_MEMBERS")) {
            return message.reply("❌ У меня нет прав на бан пользователей, пожалуйста, свяжитесь с администратором сервера.")
                .then(m => m.delete(5000));
        }

        const toBan = message.mentions.members.first() || message.guild.members.cache.get(args[0]);


        if (!toBan) {
            return message.reply("Я не могу найти данного пользователя на сервере")
                .then(m => m.delete(5000));
        }

        if (toBan.id === message.author.id) {
            return message.reply("Вы не можете забанить себя...")
                .then(m => m.delete(5000));
        }

        
        if (!toBan.bannable) {
            return message.reply("Я не могу забанить данного пользователя, т.к он имеет роль, которая находится выше моей")
                .then(m => m.delete(5000));
        }
        
        const embed = new Discord.MessageEmbed()
            .setColor("#ff0000")
            .setThumbnail(toBan.user.displayAvatarURL)
            .setFooter(message.member.displayName, message.author.displayAvatarURL)
            .setTimestamp()
            .setDescription(stripIndents`**- baned member:** ${toBan} (${toBan.id})
            **- baned by:** ${message.member} (${message.member.id})
            **- Reason:** ${args.slice(1).join(" ")}`);

        const promptEmbed = new Discord.MessageEmbed()
            .setColor("GREEN")
            .setAuthor(`Данная верификация действует 30с`)
            .setDescription(`Вы точно хотите забанить ${toBan}?`)

        await message.channel.send(promptEmbed).then(async msg => {

            const emoji = await promptMessage(msg, message.author, 30, ["✅", "❌"]);


            if (emoji === "✅") {
                const embed = new Discord.MessageEmbed()
                .setColor("#ff0000")
                .setThumbnail(toBan.user.displayAvatarURL)
                .setDescription(stripIndents`<a:pin:725447218982551603> **Пользователь заблокирован:** ${toBan} (${toBan.id})
                **Модератор:** ${message.member} (${message.member.id})
                **Причина:** ${args.slice(1).join(" ")}`);
    
                msg.channel.send(embed);

                toBan.ban(args.slice(1).join(" "))
                    .catch(err => {
                        if (err) return message.channel.send(`Хээй...плохие новости, что-то сломалось, вот ошибка: ${err}`)
                    });

            } else if (emoji === "❌") {
                msg.delete();


            }
        });
    }
};
